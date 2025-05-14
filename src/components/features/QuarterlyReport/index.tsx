"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";
import { useState } from "react";

interface QuarterlyData {
  priority: string;
  platform: string;
  product: string;
  goal: number | null;
  janA90: number | null;
  janPeer: number | null;
  febA90: number | null;
  febPeer: number | null;
  marA90: number | null;
  marPeer: number | null;
  comment: string;
}

const QuarterlyReport = () => {
     const [tableData, setTableData] = useState<QuarterlyData[]>([
    {
      priority: "1.OKR",
      platform: "CPU",
      product: "A",
      goal: 90,
      janA90: 95,
      janPeer: 92,
      febA90: 95,
      febPeer: 92,
      marA90: 95,
      marPeer: 92,
      comment: "",
    },
    {
      priority: "1.OKR",
      platform: "SOC",
      product: "B",
      goal: 95,
      janA90: 90,
      janPeer: 92,
      febA90: 90,
      febPeer: 92,
      marA90: 90,
      marPeer: 92,
      comment: "",
    },
    {
      priority: "2.IMTFocus",
      platform: "CPU",
      product: "C",
      goal: 80,
      janA90: 85,
      janPeer: 92,
      febA90: 85,
      febPeer: 92,
      marA90: 85,
      marPeer: 92,
      comment: "",
    },
    {
      priority: "2.IMTFocus",
      platform: "SOC",
      product: "D",
      goal: null,
      janA90: null,
      janPeer: null,
      febA90: null,
      febPeer: null,
      marA90: null,
      marPeer: null,
      comment: "",
    },
    {
      priority: "2.IMTFocus",
      platform: "Mobile",
      product: "E",
      goal: null,
      janA90: null,
      janPeer: null,
      febA90: null,
      febPeer: null,
      marA90: null,
      marPeer: null,
      comment: "",
    },
  ]);

  const getMark = (data: QuarterlyData) => {
    if (data.goal === null || data.janA90 === null || data.janPeer === null) {
      return { text: "", className: "" };
    }

    // Calculate average for the quarter
    const months = [data.janA90, data.febA90, data.marA90].filter((val): val is number => val !== null);
    const peers = [data.janPeer, data.febPeer, data.marPeer].filter((val): val is number => val !== null);
    
    if (months.length === 0 || peers.length === 0) return { text: "", className: "" };

    const avgA90 = months.reduce((sum, val) => sum + val, 0) / months.length;
    const avgPeer = peers.reduce((sum, val) => sum + val, 0) / peers.length;

    // Rule 1: Healthy - Meet goal + benchmark
    if (avgA90 >= data.goal && avgA90 >= avgPeer) {
      return { text: "Healthy", className: "bg-green-50 text-green-700" };
    }

    // Rule 2: Missing - Not meet goal
    if (avgA90 < data.goal) {
      return { text: "Missing", className: "bg-red-50 text-red-700" };
    }

    // Rule 3: Not benchmark - Meet goal but worse than peer by >20% of goal
    if (avgPeer - avgA90 > 0.2 * data.goal) {
      return { text: "Not benchmark", className: "bg-yellow-50 text-yellow-700" };
    }

    return { text: "", className: "" };
  };

  const getValueColor = (value: number | null, goal: number | null) => {
    if (value === null || goal === null) return "";
    return value >= goal ? "text-green-600" : "text-red-600";
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Quarterly report</h1>
      <div className="rounded-md border overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow className="bg-gray-100 hover:bg-gray-100">
              <TableHead rowSpan={2} className="border-r align-middle">
                Priority
              </TableHead>
              <TableHead rowSpan={2} className="border-r align-middle">
                Platform
              </TableHead>
              <TableHead rowSpan={2} className="border-r align-middle">
                Product
              </TableHead>
              <TableHead rowSpan={2} className="border-r align-middle">
                Goal
              </TableHead>
              <TableHead colSpan={2} className="text-center border-b border-r">
                Jan'25
              </TableHead>
              <TableHead colSpan={2} className="text-center border-b border-r">
                Feb'25
              </TableHead>
              <TableHead colSpan={2} className="text-center border-b border-r">
                Mar'25
              </TableHead>
              <TableHead rowSpan={2} className="border-r align-middle">
                Mark
              </TableHead>
              <TableHead rowSpan={2} className="align-middle">
                Comment
              </TableHead>
            </TableRow>
            <TableRow className="bg-gray-100 hover:bg-gray-100">
              <TableHead className="border-r">A90</TableHead>
              <TableHead className="border-r">Peer</TableHead>
              <TableHead className="border-r">A90</TableHead>
              <TableHead className="border-r">Peer</TableHead>
              <TableHead className="border-r">A90</TableHead>
              <TableHead className="border-r">Peer</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {tableData.map((row, index) => {
              const mark = getMark(row);
              return (
                <TableRow key={index} className="hover:bg-gray-50">
                  <TableCell className="border-r">{row.priority}</TableCell>
                  <TableCell className="border-r">{row.platform}</TableCell>
                  <TableCell className="border-r">{row.product}</TableCell>
                  <TableCell className="border-r">
                    {row.goal !== null ? `${row.goal}%` : "-"}
                  </TableCell>
                  <TableCell className={cn("border-r", getValueColor(row.janA90, row.goal))}>
                    {row.janA90 !== null ? `${row.janA90}%` : "-"}
                  </TableCell>
                  <TableCell className="border-r">
                    {row.janPeer !== null ? `${row.janPeer}%` : "-"}
                  </TableCell>
                  <TableCell className={cn("border-r", getValueColor(row.febA90, row.goal))}>
                    {row.febA90 !== null ? `${row.febA90}%` : "-"}
                  </TableCell>
                  <TableCell className="border-r">
                    {row.febPeer !== null ? `${row.febPeer}%` : "-"}
                  </TableCell>
                  <TableCell className={cn("border-r", getValueColor(row.marA90, row.goal))}>
                    {row.marA90 !== null ? `${row.marA90}%` : "-"}
                  </TableCell>
                  <TableCell className="border-r">
                    {row.marPeer !== null ? `${row.marPeer}%` : "-"}
                  </TableCell>
                  <TableCell className={cn("border-r font-medium", mark.className)}>
                    {mark.text || "-"}
                  </TableCell>
                  <TableCell className="border-r">
                    <input
                      type="text"
                      className="border-none bg-transparent focus:outline-none w-full"
                      value={row.comment}
                      placeholder="Manual key in"
                      onChange={(e) => {
                        const updatedTableData = [...tableData];
                        updatedTableData[index].comment = e.target.value;
                        setTableData(updatedTableData);
                      }}
                    />
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>
      <div className="mt-4 text-sm space-y-2">
        <div className="flex items-center">
          <div className="w-4 h-4 bg-green-600 mr-2 rounded-sm"></div>
          <span>Healthy: Meet goal + benchmark</span>
        </div>
        <div className="flex items-center">
          <div className="w-4 h-4 bg-red-600 mr-2 rounded-sm"></div>
          <span>Missing: Not meet goal</span>
        </div>
        <div className="flex items-center">
          <div className="w-4 h-4 bg-yellow-600 mr-2 rounded-sm"></div>
          <span>Not benchmark: Meet goal but worse than peer by &gt;20% of goal</span>
        </div>
      </div>
    </div>
  );
};

export default QuarterlyReport;