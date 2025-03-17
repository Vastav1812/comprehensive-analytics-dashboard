import {
    flexRender,
    getCoreRowModel,
    useReactTable,
    getSortedRowModel
} from '@tanstack/react-table';

export const SortableTable = ({ data, columns }) => {
    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
        getSortedRowModel: getSortedRowModel()
    });

    return (
        <div className="overflow-x-auto rounded-lg border">
            <table className="w-full">
                <thead className="bg-card-header">
                {table.getHeaderGroups().map((headerGroup) => (
                    <tr key={headerGroup.id}>
                        {headerGroup.headers.map((header) => (
                            <th
                                key={header.id}
                                className="px-4 py-3 text-left text-sm font-medium"
                                onClick={header.column.getToggleSortingHandler()}
                            >
                                {flexRender(
                                    header.column.columnDef.header,
                                    header.getContext()
                                )}
                            </th>
                        ))}
                    </tr>
                ))}
                </thead>
                <tbody>
                {table.getRowModel().rows.map((row) => (
                    <tr key={row.id} className="hover:bg-accent/5">
                        {row.getVisibleCells().map((cell) => (
                            <td key={cell.id} className="px-4 py-3 border-t">
                                {flexRender(cell.column.columnDef.cell, cell.getContext())}
                            </td>
                        ))}
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};