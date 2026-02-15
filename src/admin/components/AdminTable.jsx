import { useMemo, useState } from "react";
import { Trash2 } from "lucide-react";

export default function AdminTable({
  title,
  data,
  columns,
  searchKeys = [],
  onDelete,
  onStatusChange,
  statusOptions = ["new", "contacted", "done"],
  loading = false,
}) {
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    if (!search) return data;
    const s = search.toLowerCase();
    return data.filter((item) =>
      searchKeys.some((key) =>
        String(item[key] ?? "").toLowerCase().includes(s)
      )
    );
  }, [search, data, searchKeys]);

  return (
    <section className="bg-white border rounded-2xl shadow-sm">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 p-4 border-b">
        <h2 className="text-xl font-bold text-slate-900">
          {title} ({data.length})
        </h2>

        {/* Search */}
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search..."
          className="w-full sm:w-72 border border-slate-200 px-3 py-2 rounded-xl outline-none focus:ring-2 focus:ring-blue-100"
        />
      </div>

      {/* Content */}
      {loading ? (
        <p className="p-6 text-center text-slate-500">Loading...</p>
      ) : filtered.length === 0 ? (
        <p className="p-6 text-center text-slate-500">No data found.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-slate-50 text-left">
              <tr>
                {columns.map((c) => (
                  <th key={c.key} className="p-3 whitespace-nowrap">
                    {c.label}
                  </th>
                ))}
                <th className="p-3">Status</th>
                <th className="p-3 text-right">Action</th>
              </tr>
            </thead>

            <tbody>
              {filtered.map((row) => (
                <tr key={row.id} className="border-t hover:bg-slate-50/60">
                  {columns.map((c) => (
                    <td key={c.key} className="p-3">
                      {c.render ? c.render(row) : row[c.key]}
                    </td>
                  ))}

                  {/* Status Dropdown */}
                  <td className="p-3">
                    <select
                      value={row.status || "new"}
                      onChange={(e) =>
                        onStatusChange(row.id, e.target.value)
                      }
                      className="border border-slate-200 rounded-lg px-2 py-1 text-xs"
                    >
                      {statusOptions.map((op) => (
                        <option key={op} value={op}>
                          {op}
                        </option>
                      ))}
                    </select>
                  </td>

                  {/* Delete */}
                  <td className="p-3 text-right">
                    <button
                      onClick={() => onDelete(row.id)}
                      className="inline-flex items-center gap-1 text-red-600 hover:text-red-700"
                    >
                      <Trash2 size={16} />
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  );
}
