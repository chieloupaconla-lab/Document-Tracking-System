import jsPDF from "jspdf";

export const exportPDF = (docs) => {
  const doc = new jsPDF();

  doc.text("ZANECO Document Report", 10, 10);

  docs.forEach((d, i) => {
    doc.text(
      `${i + 1}. ${d.title} - ${d.status}`,
      10,
      20 + i * 10
    );
  });

  doc.save("document-report.pdf");
};