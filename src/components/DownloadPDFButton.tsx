import { pdf } from "@react-pdf/renderer";
import { ResumePDF } from "./ResumePDF";

export const DownloadPDFButton = () => {
  const handleDownload = async () => {
    const blob = await pdf(<ResumePDF />).toBlob();
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <button
      onClick={handleDownload}
      style={{
        position: "fixed",
        top: "1rem",
        right: "1rem",
        backgroundColor: "#2563eb",
        color: "white",
        padding: "0.5rem 1rem",
        borderRadius: "0.5rem",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        border: "none",
        cursor: "pointer",
        zIndex: 1000,
      }}
      className="no-print"
    >
      Download PDF
    </button>
  );
};
