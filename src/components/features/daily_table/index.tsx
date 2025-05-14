"use client"
import { Input } from "@/components/ui/input";
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
  comment: string;
}

const HvmImtTable = () => {
  const [tableData, setTableData] = useState<TableData[]>([
    {
      priority: "1. OKR",
      platform: "CPU",
      product: "A",
      goal: 90,
      wtdVol: "X0x",
      wtdA90: 95,
      wtdPeer: 92,
      mtdA90: 95,
      mtdPeer: 92,
      qtdA90: 95,
      qtdPeer: 92,
      comment: "",
    },
    {
      priority: "1. OKR",
      platform: "SOC",
      product: "B",
      goal: 95,
      wtdVol: "X0y",
      wtdA90: 90,
      wtdPeer: 92,
      mtdA90: 90,
      mtdPeer: 92,
      qtdA90: 90,
      qtdPeer: 92,
      comment: "",
    },
    {
      priority: "2. IMTFocus",
      platform: "CPU",
      product: "C",
      goal: 70,
      wtdVol: "ZZ",
      wtdA90: 80,
      wtdPeer: 92,
      mtdA90: 85,
      mtdPeer: 92,
      qtdA90: 85,
      qtdPeer: 92,
      comment: "",
    },
    {
      priority: "2. IMTFocus",
      platform: "SOC",
      product: "D",
      goal: null,
      wtdVol: "",
      wtdA90: null,
      wtdPeer: null,
      mtdA90: null,
      mtdPeer: null,
      qtdA90: null,
      qtdPeer: null,
      comment: "",
    },
    {
      priority: "2. IMTFocus",
      platform: "Mobile",
      product: "E",
      goal: null,
      wtdVol: "",
      wtdA90: null,
      wtdPeer: null,
      mtdA90: null,
      mtdPeer: null,
      qtdA90: null,
      qtdPeer: null,
      comment: "",
    },
  ]);

  const getWtdMark = (data: TableData) => {
    if (data.goal === null || data.wtdA90 === null || data.wtdPeer === null) {
      return { text: "", className: "" };
    }

    if (data.wtdA90 >= data.goal && data.wtdA90 >= data.wtdPeer) {
      return { text: "Healthy", className: "text-green-600 bg-green-50" };
    }

    if (data.wtdA90 < data.goal) {
      return { text: "Missing", className: "text-red-600 bg-red-50" };
    }

    // if (data.wtdPeer - data.wtdA90 > 0.2 * data.goal) {
    //   return {
    //     text: "Not benchmark",
    //     className: "text-yellow-600 bg-yellow-50",
    //   };
    // }
    if (data.wtdA90 >= data.goal && data.wtdA90 < data.wtdPeer) {
      // Check if the difference is greater than 20% of the goal
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
  const [inputValue, setInputValue] = useState("");
  return (
    <div className="container mx-auto p-9">
      <h1 className="text-xl font-bold mb-4">HVM IMT</h1>
      <div className="rounded-md border">
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
              <TableHead colSpan={2} className="text-center border-b border-r">
                MTD
              </TableHead>
              <TableHead colSpan={2} className="text-center border-b border-r">
                QTD
              </TableHead>
              <TableHead rowSpan={2} className="border-r align-middle">
                WTD Mark
              </TableHead>
              <TableHead rowSpan={2} className="align-middle">
                WTD comment
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
              const wtdMark = getWtdMark(row);
              return (
                <TableRow key={index} className="hover:bg-gray-50">
                  <TableCell className="border-r">{row.priority}</TableCell>
                  <TableCell className="border-r">{row.platform}</TableCell>
                  <TableCell className="border-r">{row.product}</TableCell>
                  <TableCell className="border-r">
                    {row.goal !== null ? `${row.goal}%` : "-"}
                  </TableCell>
                  <TableCell className="border-r">
                    {row.wtdVol || "-"}
                  </TableCell>
                  <TableCell
                    className={cn(
                      "border-r",
                      getValueColor(row.wtdA90, row.goal)
                    )}
                  >
                    {row.wtdA90 !== null ? `${row.wtdA90}%` : "-"}
                  </TableCell>
                  <TableCell className="border-r">
                    {row.wtdPeer !== null ? `${row.wtdPeer}%` : "-"}
                  </TableCell>
                  <TableCell
                    className={cn(
                      "border-r",
                      getValueColor(row.mtdA90, row.goal)
                    )}
                  >
                    {row.mtdA90 !== null ? `${row.mtdA90}%` : "-"}
                  </TableCell>
                  <TableCell className="border-r">
                    {row.mtdPeer !== null ? `${row.mtdPeer}%` : "-"}
                  </TableCell>
                  <TableCell
                    className={cn(
                      "border-r",
                      getValueColor(row.qtdA90, row.goal)
                    )}
                  >
                    {row.qtdA90 !== null ? `${row.qtdA90}%` : "-"}
                  </TableCell>
                  <TableCell className="border-r">
                    {row.qtdPeer !== null ? `${row.qtdPeer}%` : "-"}
                  </TableCell>
                  <TableCell
                    className={cn("border-r font-medium", wtdMark.className)}
                  >
                    {wtdMark.text || "-"}
                  </TableCell>
                  {/* <TableCell>{row.comment || "-"}</TableCell> */}
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
      <div className="mt-5 text-sm space-y-1">
        <p>
          <span className="inline-block w-4 h-4 bg-green-600 mr-2"></span>
          Healthy: Meet goal + benchmark
        </p>
        <p>
          <span className="inline-block w-4 h-4 bg-red-600 mr-2"></span>
          Missing: Not meet goal
        </p>
        <p>
          <span className="inline-block w-4 h-4 bg-yellow-600 mr-2"></span>
          Not benchmark: Meet goal but Yield worst than peer &gt;20% Yield goal
        </p>
        <p>
          <span className="inline-block w-4 h-4 bg-green-600 mr-2"></span>
          Healthy: Meet goal + benchmark
        </p>
        <p>
          <span className="inline-block w-4 h-4 bg-red-600 mr-2"></span>
          Missing: Not meet goal
        </p>
        <p>
          <span className="inline-block w-4 h-4 bg-yellow-600 mr-2"></span>
          Not benchmark: Meet goal but Yield worst than peer &gt;20% Yield goal
        </p>
      </div>
    </div>
  );
};

export default HvmImtTable;
