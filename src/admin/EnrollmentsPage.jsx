import { useEffect, useState } from "react";
import AdminTable from "./AdminTable";
import {
  getCollectionData,
  updateStatus,
  deleteItem,
} from "../api/admin.api";

export default function EnrollmentsPage() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const load = async () => {
    setLoading(true);
    const res = await getCollectionData("enrollments");
    setData(res);
    setLoading(false);
  };

  useEffect(() => {
    load();
  }, []);

  const handleStatus = async (id, status) => {
    try {
      await updateStatus("enrollments", id, status);
      load();
    } catch (err) {
      console.log("Status update failed:", err.code, err.message);
      alert("Status update failed");
    }
  };

  const handleDelete = async (id) => {
    if (!id) {
      console.log("Delete got empty id:", id);
      return alert("❌ Delete failed (empty id)");
    }

    if (!confirm("Delete this enrollment?")) return;

    try {
      await deleteItem("enrollments", id);
      alert("✅ Deleted!");
      load();
    } catch (err) {
      console.log("Delete failed:", err.code, err.message);
      alert("❌ Delete failed");
    }
  };

  return (
    <AdminTable
      title="Course Enrollments"
      data={data}
      loading={loading}
      searchKeys={[
        "studentName",
        "studentEmail",
        "studentPhone",
        "courseTitle",
      ]}
      columns={[
        { key: "studentName", label: "Student" },
        { key: "studentEmail", label: "Email" },
        { key: "studentPhone", label: "Phone" },
        { key: "courseTitle", label: "Course" },
        {
          key: "coursePrice",
          label: "Price",
          render: (r) => `৳${r.coursePrice}`,
        },
      ]}
      onStatusChange={handleStatus}
      onDelete={handleDelete}
      statusOptions={["enrolled", "contacted", "done"]}
    />
  );
}
