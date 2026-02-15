import { useEffect, useState } from "react";
import AdminTable from "./AdminTable";
import {
  getCollectionData,
  updateStatus,
  deleteItem,
} from "../api/admin.api";

export default function ServiceRequestsPage() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const load = async () => {
    setLoading(true);
    const res = await getCollectionData("serviceRequests");
    setData(res);
    setLoading(false);
  };

  useEffect(() => {
    load();
  }, []);

  const handleStatus = async (id, status) => {
    await updateStatus("serviceRequests", id, status);
    load();
  };

  const handleDelete = async (id) => {
    if (!confirm("Delete this service request?")) return;
    await deleteItem("serviceRequests", id);
    load();
  };

  return (
    <AdminTable
      title="Service Requests"
      data={data}
      loading={loading}
      searchKeys={["name", "email", "phone", "serviceName"]}
      columns={[
        { key: "name", label: "Client" },
        { key: "email", label: "Email" },
        { key: "phone", label: "Phone" },
        { key: "serviceName", label: "Service" },
        {
          key: "servicePrice",
          label: "Price",
          render: (r) => `৳${r.servicePrice}`,
        },
      ]}
      onStatusChange={handleStatus}
      onDelete={handleDelete}
      statusOptions={["new", "contacted", "done"]}
    />
  );
}
