import * as React from 'react';
import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import Stack from '@mui/material/Stack';
import Dialog from '@mui/material/Dialog';
import InputBase from '@mui/material/InputBase';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import Add from '@mui/icons-material/Add';
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';
import DialogTitle from '@mui/material/DialogTitle';
import DeleteIcon from '@mui/icons-material/Delete';
import Close from '@mui/icons-material/Close';
import FilterListIcon from '@mui/icons-material/FilterList';
import { visuallyHidden } from '@mui/utils';
import { styled } from '@mui/material/styles';

const BootstrapButton = styled(Button)({
  padding: '12px 8px',
});

function createData(name, calories, fat, carbs, protein, protin, rotin) {
  return {
    name,
    calories,
    fat,
    carbs,
    protein,
    protin,
    rotin,
  };
}

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

// Since 2020 all major browsers ensure sort stability with Array.prototype.sort().
// stableSort() brings sort stability to non-modern browsers (notably IE11). If you
// only support modern browsers you can replace stableSort(exampleArray, exampleComparator)
// with exampleArray.slice().sort(exampleComparator)
function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const headCells = [
  {
    id: 'login',
    numeric: false,
    disablePadding: false,
    label: '账号',
  },
  {
    id: 'status',
    numeric: true,
    disablePadding: false,
    label: '昵称',
  },
  {
    id: 'leverageInCents',
    numeric: true,
    disablePadding: false,
    label: '分组',
  },
  {
    id: 'balance',
    numeric: true,
    disablePadding: false,
    label: '余额',
  },
  {
    id: 'depositCurrency',
    numeric: true,
    disablePadding: false,
    label: '奖金',
  },
];

function EnhancedTableHead(props) {
  const { order, orderBy, numSelected, rowCount, onRequestSort } =
    props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? 'right' : 'left'}
            padding={headCell.disablePadding ? 'none' : 'normal'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
        <TableCell align="center">操作</TableCell>
      </TableRow>
    </TableHead>
  );
}

function EnhancedTableToolbar(props) {
  const { numSelected } = props;

  return (
    <Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
        ...(numSelected > 0 && {
          bgcolor: (theme) =>
            alpha(theme.palette.primary.main, theme.palette.action.activatedOpacity),
        }),
      }}
    >
      {numSelected > 0 ? (
        <Typography
          sx={{ flex: '1 1 100%' }}
          color="inherit"
          variant="subtitle1"
          component="div"
        >
          {numSelected} selected
        </Typography>
      ) : (
        <Typography
          sx={{ flex: '1 1 100%' }}
          variant="h6"
          id="tableTitle"
          component="div"
        >
          Nutrition
        </Typography>
      )}

      {numSelected > 0 ? (
        <Tooltip title="Delete">
          <IconButton>
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      ) : (
        <Tooltip title="Filter list">
          <IconButton>
            <FilterListIcon />
          </IconButton>
        </Tooltip>
      )}
    </Toolbar>
  );
}

export default function EnhancedTable({data}) {
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('calories');
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };


  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const isSelected = (name) => selected.indexOf(name) !== -1;

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const visibleRows = React.useMemo(
    () =>
      stableSort(data, getComparator(order, orderBy)).slice(
        page * rowsPerPage,
        page * rowsPerPage + rowsPerPage,
      ),
    [order, orderBy, page, rowsPerPage],
  );

  return (
    <Box sx={{ width: '100%' }}>
      <Paper sx={{ width: '100%', mb: 2, py: 2 }}>
        
        {!visibleRows.length ? (
          <Typography variant="overline" align="center" display="block" gutterBottom>
            暂无账户信息
          </Typography>
        ) : null}
        {/* <EnhancedTableToolbar numSelected={selected.length} /> */}
        {
          visibleRows.length ? (
            <>
              <TableContainer>
                <Table
                  sx={{ minWidth: 750 }}
                  aria-labelledby="tableTitle"
                  size={dense ? 'small' : 'medium'}
                >
                  <EnhancedTableHead
                    numSelected={selected.length}
                    order={order}
                    orderBy={orderBy}
                    onRequestSort={handleRequestSort}
                    rowCount={data.length}
                  />
                  <TableBody>
                    {visibleRows.map((row, index) => {
                      const labelId = `enhanced-table-checkbox-${index}`;

                      return (
                        <TableRow
                          hover
                          role="checkbox"
                          tabIndex={-1}
                          key={row.name}
                        >
                          <TableCell
                            component="th"
                            id={labelId}
                            scope="row"
                          >
                            {row.name}
                          </TableCell>
                          <TableCell align="right">{row.login}</TableCell>
                          <TableCell align="right">{row.status}</TableCell>
                          <TableCell align="right">{row.leverageInCents}</TableCell>
                          <TableCell align="right">
                            <Stack direction="row" alignItems="center" justifyContent="flex-end" spacing={2}>
                              <span>{row.balance}</span>
                              <Button size="small" variant="text" onClick={handleClickOpen}>变更</Button>
                            </Stack>
                          </TableCell>
                          <TableCell align="center">
                            <Stack direction="row" alignItems="center" justifyContent="flex-end" spacing={2}>
                              <span>{row.depositCurrency}</span>
                              <Button size="small" variant="text" onClick={handleClickOpen}>变更</Button>
                            </Stack>
                          </TableCell>
                          <TableCell align="right">{row.rotin}</TableCell>
                          <TableCell align="center">
                            <Button size="small" variant="outlined">修改密码</Button>
                          </TableCell>
                        </TableRow>
                      );
                    })}
                    {emptyRows > 0 && (
                      <TableRow
                        style={{
                          height: (dense ? 33 : 53) * emptyRows,
                        }}
                      >
                        <TableCell colSpan={6} />
                      </TableRow>
                    )}
                  </TableBody>
                </Table>
              </TableContainer>
              <TablePagination
                rowsPerPageOptions={[5, 10, 25]}
                component="div"
                count={data.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
              />
            </>
          ) : null
        }
      </Paper>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle className='pr-2 pt-2'>
          <Stack direction="row" alignItems="center" justifyContent="space-between">
            <span className='font-semibold'>变更奖金</span>
            <IconButton onClick={handleClose}>
              <Close/>
            </IconButton>
          </Stack>
        </DialogTitle>
        <DialogContent sx={{ p: 5 }}>
          <Paper
            variant="outlined"
            component="form"
            sx={{ mb: 2, display: 'flex', alignItems: 'center', width: 300 }}
          >
            <BootstrapButton className='bg-blue-700 hover:bg-blue-700' variant="contained" disableRipple>
              <Add />
            </BootstrapButton>
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="变更金额"
              inputProps={{ 'aria-label': '变更金额' }}
            />
          </Paper>
          <Paper
            variant="outlined"
            component="form"
            sx={{ display: 'flex', alignItems: 'center', width: 300 }}
          >
            <BootstrapButton className='bg-gray-50 text-gray-400 hover:bg-gray-50' variant="contained" disableRipple>
              <HorizontalRuleIcon />
            </BootstrapButton>
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="变更金额"
              inputProps={{ 'aria-label': '变更金额', textAlign: 'right' }}
            />
          </Paper>
          <Button className="bg-blue-900" sx={{mt:4, py: 1.5}} onClick={handleClose} variant="contained" fullWidth>确认</Button>
        </DialogContent>
      </Dialog>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle className='pr-2 pt-2'>
          <Stack direction="row" alignItems="center" justifyContent="space-between">
            <span className='font-semibold'>变更奖金</span>
            <IconButton onClick={handleClose}>
              <Close/>
            </IconButton>
          </Stack>
        </DialogTitle>
        <DialogContent sx={{ p: 5 }}>
          <Paper
            variant="outlined"
            component="form"
            sx={{ mb: 2, display: 'flex', alignItems: 'center', width: 300 }}
          >
            <BootstrapButton className='bg-blue-700 hover:bg-blue-700' variant="contained" disableRipple>
              <Add />
            </BootstrapButton>
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="变更金额"
              inputProps={{ 'aria-label': '变更金额' }}
            />
          </Paper>
          <Paper
            variant="outlined"
            component="form"
            sx={{ display: 'flex', alignItems: 'center', width: 300 }}
          >
            <BootstrapButton className='bg-gray-50 text-gray-400 hover:bg-gray-50' variant="contained" disableRipple>
              <HorizontalRuleIcon />
            </BootstrapButton>
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="变更金额"
              inputProps={{ 'aria-label': '变更金额', textAlign: 'right' }}
            />
          </Paper>
          <Button className="bg-blue-900" sx={{mt:4, py: 1.5}} onClick={handleClose} variant="contained" fullWidth>确认</Button>
        </DialogContent>
      </Dialog>
    </Box>
  );
}