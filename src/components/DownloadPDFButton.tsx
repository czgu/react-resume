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
      className="fixed top-4 right-4 bg-blue-600 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-blue-700 transition-colors cursor-pointer print:hidden"
    >
      Download PDF
    </button>
  );
};
