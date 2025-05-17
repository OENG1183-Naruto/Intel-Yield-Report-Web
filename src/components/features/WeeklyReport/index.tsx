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

interface TableData {
  priority: string;
  platform: string;
  product: string;
  goal: number | null;
  wtdVol: string;
  wtdA90: number | null;
  wtdPeer: number | null;
  mtdA90: number | null;
  mtdPeer: number | null;
  qtdA90: number | null;
  qtdPeer: number | null;
  period: string;
  comment: string;
}

const WeeklyClosureReport = () => {
  const [tableData, setTableData] = useState<TableData[]>([
    {
      priority: "1. OKR",
      platform: "CPU",
      product: "A",
      goal: 90,
      wtdVol: "Xxx",
      wtdA90: 95,
      wtdPeer: 92,
      mtdA90: 95,
      mtdPeer: 92,
      qtdA90: 95,
      qtdPeer: 92,
      period: "Week Month",
      comment: "",
    },
    {
      priority: "1. OKR",
      platform: "SOC",
      product: "B",
      goal: 95,
      wtdVol: "Yyy",
      wtdA90: 90,
      wtdPeer: 92,
      mtdA90: 90,
      mtdPeer: 92,
      qtdA90: 90,
      qtdPeer: 92,
      period: "Week Month",
      comment: "",
    },
    {
      priority: "2. IMT Focus",
      platform: "CPU",
      product: "C",
      goal: 80,
      wtdVol: "zzz",
      wtdA90: 85,
      wtdPeer: 92,
      mtdA90: 85,
      mtdPeer: 92,
      qtdA90: 85,
      qtdPeer: 92,
      period: "Week Month",
      comment: "",
    },
  ]);

  const getMark = (data: TableData) => {
    if (data.goal === null || data.wtdA90 === null || data.wtdPeer === null) {
      return { text: "", className: "" };
    }

    if (data.wtdA90 >= data.goal && data.wtdA90 >= data.wtdPeer) {
      return { text: "Healthy", className: "bg-green-50 text-green-700" };
    }

    if (data.wtdA90 < data.goal) {
      return { text: "Missing", className: "bg-red-50 text-red-700" };
    }

    if (data.wtdA90 >= data.goal && data.wtdA90 < data.wtdPeer) {
      const difference = data.wtdPeer - data.wtdA90;
      const threshold = 0.2 * data.goal;
      if (difference > threshold) {
        return {
          text: "Not benchmark",
          className: "text-yellow-600 bg-yellow-50",
        };
      } else {
        return { text: "Healthy", className: "text-green-600 bg-green-50" };
      }
    }

    return { text: "", className: "" };
  };

  const getValueColor = (value: number | null, goal: number | null) => {
    if (value === null || goal === null) return "";
    return value >= goal ? "text-green-600" : "text-red-600";
  };

  const groupedData = tableData.reduce((acc, row) => {
    if (!acc[row.priority]) acc[row.priority] = [];
    acc[row.priority].push(row);
    return acc;
  }, {} as Record<string, TableData[]>);

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">
        Weekly/Monthly closure report (every Monday)
      </h1>
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
              <TableHead rowSpan={2} className="border-r align-middle">
                WTD Vol
              </TableHead>
              <TableHead colSpan={2} className="text-center border-b border-r">
                WTD
              </TableHead>
              <TableHead rowSpan={2} className="border-r align-middle">
                Mark
              </TableHead>
              <TableHead colSpan={2} className="text-center border-b border-r">
                MTD
              </TableHead>
              <TableHead rowSpan={2} className="border-r align-middle">
                Mark
              </TableHead>
              <TableHead colSpan={2} className="text-center border-b border-r">
                QTD
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
            {Object.entries(groupedData).map(([priority, rows]) =>
              rows.map((row, index) => {
                const mark = getMark(row);
                return (
                  <TableRow key={`${priority}-${index}`} className="hover:bg-gray-50">
                    {index === 0 && (
                      <TableCell
                        className="border-r font-medium align-top"
                        rowSpan={rows.length}
                      >
                        {priority}
                      </TableCell>
                    )}
                    <TableCell className="border-r">{row.platform}</TableCell>
                    <TableCell className="border-r">{row.product}</TableCell>
                    <TableCell className="border-r">{row.goal}%</TableCell>
                    <TableCell className="border-r">{row.wtdVol}</TableCell>
                    <TableCell
                      className={cn(
                        "border-r",
                        getValueColor(row.wtdA90, row.goal)
                      )}
                    >
                      {row.wtdA90}%
                    </TableCell>
                    <TableCell
                      className={cn(
                        "border-r",
                        getValueColor(row.wtdPeer, row.goal)
                      )}
                    >
                      {row.wtdPeer}%
                    </TableCell>
                    <TableCell
                      className={cn("border-r font-medium", mark.className)}
                    >
                      {mark.text}
                    </TableCell>
                    <TableCell
                      className={cn(
                        "border-r",
                        getValueColor(row.mtdA90, row.goal)
                      )}
                    >
                      {row.mtdA90}%
                    </TableCell>
                    <TableCell
                      className={cn(
                        "border-r",
                        getValueColor(row.mtdPeer, row.goal)
                      )}
                    >
                      {row.mtdPeer}%
                    </TableCell>
                    <TableCell
                      className={cn("border-r font-medium", mark.className)}
                    >
                      {mark.text}
                    </TableCell>
                    <TableCell
                      className={cn(
                        "border-r",
                        getValueColor(row.qtdA90, row.goal)
                      )}
                    >
                      {row.qtdA90}%
                    </TableCell>
                    <TableCell
                      className={cn(
                        "border-r",
                        getValueColor(row.qtdPeer, row.goal)
                      )}
                    >
                      {row.qtdPeer}%
                    </TableCell>
                    <TableCell
                      className={cn("border-r font-medium", mark.className)}
                    >
                      {mark.text}
                    </TableCell>
                    <TableCell className="border-r">
                      <input
                        type="text"
                        className="border-none bg-transparent focus:outline-none w-full"
                        value={row.comment}
                        placeholder="Manual key in"
                        onChange={(e) => {
                          const updatedTableData = [...tableData];
                          updatedTableData[
                            tableData.indexOf(row)
                          ].comment = e.target.value;
                          setTableData(updatedTableData);
                        }}
                      />
                    </TableCell>
                  </TableRow>
                );
              })
            )}
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

export default WeeklyClosureReport;
