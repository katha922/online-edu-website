import { useEffect, useState } from "react";
import AdminTable from "./AdminTable";
import {
  getCollectionData,
  updateStatus,
  deleteItem,
} from "../api/admin.api";

export default function ContactsPage() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const load = async () => {
    setLoading(true);
    const res = await getCollectionData("contacts");
    setData(res);
    setLoading(false);
  };

  useEffect(() => {
    load();
  }, []);

  const handleStatus = async (id, status) => {
    await updateStatus("contacts", id, status);
    load();
  };

  const handleDelete = async (id) => {
    if (!confirm("Delete this contact message?")) return;
    await deleteItem("contacts", id);
    load();
  };

  return (
    <AdminTable
      title="Contact Messages"
      data={data}
      loading={loading}
      searchKeys={["name", "email", "phone", "subject", "message"]}
      columns={[
        { key: "name", label: "Name" },
        { key: "email", label: "Email" },
        { key: "phone", label: "Phone" },
        { key: "subject", label: "Subject" },
        {
          key: "message",
          label: "Message",
          render: (r) => (
            <span className="line-clamp-2 max-w-xs block">
              {r.message}
            </span>
          ),
        },
      ]}
      onStatusChange={handleStatus}
      onDelete={handleDelete}
      statusOptions={["new", "replied", "closed"]}
    />
  );
}
