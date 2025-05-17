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
      platform: "Mobile",
      product: "E",
      goal: 80,
      janA90: 85,
      janPeer: 92,
      febA90: 85,
      febPeer: 92,
      marA90: 85,
      marPeer: 92,
      comment: "",
    },
  ]);
  const getMonthlyMark = (
    a90: number | null,
    peer: number | null,
    goal: number | null
  ) => {
    if (a90 === null || peer === null || goal === null)
      return { text: "", className: "" };

    if (a90 < goal) {
      return { text: "Missing", className: "bg-red-50 text-red-700" };
    }

    const peerGap = peer - a90;

    if (peerGap > 0.2 * goal) {
      return {
        text: "Not benchmark",
        className: "bg-yellow-50 text-yellow-700",
      };
    }

    return {
      text: "Healthy",
      className: "bg-green-50 text-green-700",
    };
  };

  const getValueColor = (value: number | null, goal: number | null) => {
    if (value === null || goal === null) return "";
    return value >= goal ? "text-green-600" : "text-red-600";
  };

  const getPriorityRowSpans = () => {
    const spanMap: { [key: string]: number } = {};
    tableData.forEach((row) => {
      spanMap[row.priority] = (spanMap[row.priority] || 0) + 1;
    });
    return spanMap;
  };

  const prioritySpans = getPriorityRowSpans();
  const renderedPriorities = new Set();

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
              <TableHead colSpan={3} className="text-center border-b border-r">
                Jan'25
              </TableHead>
              <TableHead colSpan={3} className="text-center border-b border-r">
                Feb'25
              </TableHead>
              <TableHead colSpan={3} className="text-center border-b border-r">
                Mar'25
              </TableHead>
              <TableHead rowSpan={2} className="align-middle">
                Comment
              </TableHead>
            </TableRow>
            <TableRow className="bg-gray-100 hover:bg-gray-100">
              <TableHead className="border-r">A90</TableHead>
              <TableHead className="border-r">Peer</TableHead>
              <TableHead className="border-r">Mark</TableHead>
              <TableHead className="border-r">A90</TableHead>
              <TableHead className="border-r">Peer</TableHead>
              <TableHead className="border-r">Mark</TableHead>
              <TableHead className="border-r">A90</TableHead>
              <TableHead className="border-r">Peer</TableHead>
              <TableHead className="border-r">Mark</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {tableData.map((row, index) => {
              const janMark = getMonthlyMark(row.janA90, row.janPeer, row.goal);
              const febMark = getMonthlyMark(row.febA90, row.febPeer, row.goal);
              const marMark = getMonthlyMark(row.marA90, row.marPeer, row.goal);

              const showPriority = !renderedPriorities.has(row.priority);
              if (showPriority) renderedPriorities.add(row.priority);

              return (
                <TableRow key={index} className={cn("hover:bg-gray-50")}>
                  {showPriority && (
                    <TableCell
                      className="border-r align-top"
                      rowSpan={prioritySpans[row.priority]}
                    >
                      {row.priority}
                    </TableCell>
                  )}
                  <TableCell className="border-r">{row.platform}</TableCell>
                  <TableCell className="border-r">{row.product}</TableCell>
                  <TableCell className="border-r">
                    {row.goal !== null ? `${row.goal}%` : "-"}
                  </TableCell>

                  {/* Jan */}
                  <TableCell
                    className={cn(
                      "border-r",
                      getValueColor(row.janA90, row.goal)
                    )}
                  >
                    {row.janA90 !== null ? `${row.janA90}%` : "-"}
                  </TableCell>
                  <TableCell
                    className={cn(
                      "border-r",
                      getValueColor(row.janPeer, row.goal)
                    )}
                  >
                    {row.janPeer !== null ? `${row.janPeer}%` : "-"}
                  </TableCell>
                  <TableCell
                    className={cn("border-r font-medium", janMark.className)}
                  >
                    {janMark.text || "-"}
                  </TableCell>

                  {/* Feb */}
                  <TableCell
                    className={cn(
                      "border-r",
                      getValueColor(row.febA90, row.goal)
                    )}
                  >
                    {row.febA90 !== null ? `${row.febA90}%` : "-"}
                  </TableCell>
                  <TableCell
                    className={cn(
                      "border-r",
                      getValueColor(row.febPeer, row.goal)
                    )}
                  >
                    {row.febPeer !== null ? `${row.febPeer}%` : "-"}
                  </TableCell>
                  <TableCell
                    className={cn("border-r font-medium", febMark.className)}
                  >
                    {febMark.text || "-"}
                  </TableCell>

                  {/* Mar */}
                  <TableCell
                    className={cn(
                      "border-r",
                      getValueColor(row.marA90, row.goal)
                    )}
                  >
                    {row.marA90 !== null ? `${row.marA90}%` : "-"}
                  </TableCell>
                  <TableCell
                    className={cn(
                      "border-r",
                      getValueColor(row.marPeer, row.goal)
                    )}
                  >
                    {row.marPeer !== null ? `${row.marPeer}%` : "-"}
                  </TableCell>
                  <TableCell
                    className={cn("border-r font-medium", marMark.className)}
                  >
                    {marMark.text || "-"}
                  </TableCell>

                  {/* Comment */}
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
          <span>
            Not benchmark: Meet goal but worse than peer by &gt;20% of goal
          </span>
        </div>
      </div>
    </div>
  );
};

export default QuarterlyReport;
