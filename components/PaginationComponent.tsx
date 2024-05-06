import { Pagination } from "@nextui-org/pagination";
import React from "react";

type PropType = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

export default function PaginationComponent({
  totalPages,
  onPageChange,
  currentPage,
}: PropType) {
  return (
    
    <Pagination isCompact total={totalPages} onChange={onPageChange} initialPage={currentPage}/>
  );
}
