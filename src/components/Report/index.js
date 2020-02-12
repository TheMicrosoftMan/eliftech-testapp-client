import React from "react";
import { getReportAPI } from "../../_api/orders";

const Report = () => {
  const getReport = () => {
    getReportAPI().then(data => {
      const url = window.URL.createObjectURL(
        new Blob([data.data], { type: "text/csv" })
      );
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "report.csv");
      document.body.appendChild(link);
      link.click();
      window.URL.revokeObjectURL(url);
    });
  };

  return (
    <div className="Report">
      <button className="Report__btn" onClick={getReport}>
        Download the full order records data as the CSV report
      </button>
    </div>
  );
};

export { Report };
