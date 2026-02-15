import { useMemo, useState } from "react";

export default function AdminTable({
  title = "Table",
  data = [],
  loading = false,
  searchKeys = [],
  columns = [],
  onStatusChange,
  onDelete,
  statusOptions = [],
}) {
  const [query, setQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  // ---------- filter + search ----------
  const filtered = useMemo(() => {
    let rows = [...data];

    // status filter
    if (statusFilter !== "all") {
      rows = rows.filter(
        (r) => (r.status || "").toLowerCase() === statusFilter.toLowerCase()
      );
    }

    // search
    if (query.trim()) {
      const q = query.toLowerCase();
      rows = rows.filter((r) =>
        searchKeys.some((k) =>
          String(r?.[k] ?? "")
            .toLowerCase()
            .includes(q)
        )
      );
    }

    return rows;
  }, [data, query, statusFilter, searchKeys]);

  // ---------- export csv ----------
  const exportCSV = () => {
    if (!filtered.length) return alert("No data to export");

    const headers = columns.map((c) => c.label);
    const rows = filtered.map((r) =>
      columns.map((c) => {
        if (c.render) return c.render(r);
        return r?.[c.key] ?? "";
      })
    );

    const csv = [headers, ...rows]
      .map((row) =>
        row
          .map((cell) => `"${String(cell).replace(/"/g, '""')}"`)
          .join(",")
      )
      .join("\n");

    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = `${title.replace(/\s+/g, "_").toLowerCase()}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <section className="bg-white border rounded-2xl p-5 shadow-sm">
      {/* header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-4">
        <div>
          <h2 className="text-xl md:text-2xl font-bold">
            {title} ({filtered.length})
          </h2>
          <p className="text-sm text-slate-500">
            Search / filter / status update / delete
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-2 items-stretch sm:items-center">
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search..."
            className="border rounded-xl px-3 py-2 text-sm w-full sm:w-56"
          />

          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="border rounded-xl px-3 py-2 text-sm w-full sm:w-40"
          >
            <option value="all">All Status</option>
            {statusOptions.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>

          <button
            onClick={exportCSV}
            className="bg-emerald-600 text-white px-4 py-2 rounded-xl text-sm font-semibold hover:bg-emerald-500"
          >
            Export CSV
          </button>
        </div>
      </div>

      {/* table */}
      {loading ? (
        <p className="py-6 text-center text-slate-500">Loading...</p>
      ) : filtered.length === 0 ? (
        <p className="py-6 text-center text-slate-500">No data found.</p>
      ) : (
        <div className="overflow-x-auto rounded-xl border">
          <table className="min-w-full text-sm">
            <thead className="bg-slate-50 text-left">
              <tr>
                {columns.map((c) => (
                  <th key={c.key} className="p-3 font-semibold">
                    {c.label}
                  </th>
                ))}
                {(onStatusChange || onDelete) && (
                  <>
                    {onStatusChange && (
                      <th className="p-3 font-semibold">Status</th>
                    )}
                    {onDelete && (
                      <th className="p-3 font-semibold">Action</th>
                    )}
                  </>
                )}
              </tr>
            </thead>

            <tbody>
              {filtered.map((r) => {
                // ✅ VERY IMPORTANT: id fallback
                const rowId = r.id || r.docId || r._id;

                return (
                  <tr key={rowId} className="border-t">
                    {/* data cols */}
                    {columns.map((c) => (
                      <td key={c.key} className="p-3">
                        {c.render ? c.render(r) : r?.[c.key]}
                      </td>
                    ))}

                    {/* status control */}
                    {onStatusChange && (
                      <td className="p-3">
                        <select
                          value={r.status || ""}
                          onChange={(e) =>
                            onStatusChange(rowId, e.target.value)
                          }
                          className="border rounded-lg px-2 py-1 text-xs"
                        >
                          {statusOptions.map((s) => (
                            <option key={s} value={s}>
                              {s}
                            </option>
                          ))}
                        </select>
                      </td>
                    )}

                    {/* delete */}
                    {onDelete && (
                      <td className="p-3">
                        <button
                          onClick={() => onDelete(rowId)}
                          className="bg-red-600 text-white px-3 py-1.5 rounded-lg text-xs font-semibold hover:bg-red-500"
                        >
                          Delete
                        </button>
                      </td>
                    )}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </section>
  );
}
