import React from "react";
import adminEditImg from "../../../assets/icons/adminEdit.svg";
import adminDeleteImg from "../../../assets/icons/adminDelete.svg";

type TableCellContent =
  | string
  | {
      text: string;
      image?: string;
      imageShape?: "circle" | "square";
      icon?: React.ReactNode;
    };

type TableRow = {
  id: string | number;
  cells: TableCellContent[];
};

type TableProps = {
  theads: string[];
  rows: TableRow[];
  allowActions?: boolean;
  onEdit?: (id: string | number) => void;
  onDelete?: (id: string | number) => void;
};

const AdminTable: React.FC<TableProps> = ({
  theads,
  rows,
  allowActions = true,
  onEdit,
  onDelete,
}) => {
  // Calculate column count for grid layout
  const columnCount = theads.length + (allowActions ? 1 : 0);

  return (
    <div className="flex flex-col gap-2.5 fade-in">
      {/* Table Header */}
      <div
        className="grid gap-2.5 w-full"
        style={{ gridTemplateColumns: `repeat(${columnCount}, 1fr)` }}
      >
        {theads.map((thead, index) => (
          <div key={index} className="header h-[50px] bg-[#EAEDF5] p-3">
            <p className="text-lg font-[Corbel] text-[#000000] font-semibold text-center">
              {thead}
            </p>
          </div>
        ))}

        {allowActions && (
          <div className="header h-[50px] bg-[#EAEDF5] p-3">
            <p className="text-lg font-[Corbel] text-[#000000] font-semibold text-center">
              Əməliyyat
            </p>
          </div>
        )}
      </div>

      {/* Table Body */}
      <div className="flex flex-col gap-2.5">
        {rows.map((row) => (
          <div
            key={row.id}
            className="grid gap-2.5 w-full"
            style={{ gridTemplateColumns: `repeat(${columnCount}, 1fr)` }}
          >
            {row.cells.map((cell, cellIndex) => (
              <TableCell key={cellIndex} content={cell} />
            ))}

            {allowActions && (
              <div className="h-[50px] bg-[#FFFFFF] p-3 flex justify-center items-center gap-8 ">
                <button
                  onClick={() => onEdit?.(row.id)}
                  className="w-[40px] h-[40px] bg-[#44A15E] rounded-xl p-2.5 hover:opacity-90 transition-opacity cursor-pointer"
                >
                  <img
                    src={adminEditImg}
                    alt="edit"
                    className="w-full h-full"
                  />
                </button>
                <button
                  onClick={() => onDelete?.(row.id)}
                  className="w-[40px] h-[40px] bg-[#DA3D6866] rounded-xl p-2.5 hover:opacity-90 transition-opacity cursor-pointer"
                >
                  <img
                    src={adminDeleteImg}
                    alt="delete"
                    className="w-full h-full"
                  />
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

// komekci komponent
const TableCell: React.FC<{ content: TableCellContent }> = ({ content }) => {
  return (
    <div className="h-[50px] bg-[#FFFFFF] p-3 flex items-center ">
      {typeof content === "string" ? (
        <p className=" font-[Corbel] text-[#000000] font-semibold text-center w-full text-base">
          {content}
        </p>
      ) : (
        <div
          style={{ justifyContent: content?.image ? "flex-start" : "center" }}
          className="flex items-center gap-3 w-full"
        >
          {content?.image && (
            <img
              src={content.image}
              alt=""
              className={`w-8 h-8 object-cover ${
                content.imageShape === "circle"
                  ? "rounded-full"
                  : "rounded-none"
              }`}
            />
          )}
          <span className="text-lg font-[Corbel] text-[#000000] font-semibold text-center">
            {content?.icon ? content?.icon : content?.text}
          
          </span>
        </div>
      )}
    </div>
  );
};

export default AdminTable;
