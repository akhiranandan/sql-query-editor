import { useMemo } from 'react';
import {
  MaterialReactTable,
  useMaterialReactTable,
} from 'material-react-table';

const DisplayTable = ({data}) => {
  const columns = useMemo(
    () => [
      {
        accessorKey: 'first_name',
        header: 'First Name',
        footer: 'First Name',
      },
      {
        accessorKey: 'last_name',
        header: 'Last Name',
        footer: 'Last Name',
      },
      {
        accessorKey: 'email',
        header: 'Email',
        footer: 'Email',
      },
      {
        accessorKey: 'city',
        header: 'City',
        footer: 'City',
      },
    ],
    []
  );

  const table = useMaterialReactTable({
    columns,
    data,
    enableBottomToolbar: false,
    enableStickyHeader: true,
    enableStickyFooter: true,
    enablePagination: false,
    muiTableContainerProps: { sx: { maxHeight: '770px'} },
    muiTableBodyCellProps: {
      sx: (theme) => ({
        backgroundColor:
          theme.palette.mode === 'dark'
            ? theme.palette.grey[900]
            : theme.palette.grey[50],
      }),
    },
  });

  return <MaterialReactTable table={table} />;
};

export default DisplayTable;
