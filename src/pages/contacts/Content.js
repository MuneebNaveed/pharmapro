import React, { useEffect, useMemo } from 'react';
import { Row, Col, Card, CardBody, Table } from 'reactstrap';
import * as actions from '../../redux/actions';
import { useSelector, useDispatch } from 'react-redux';
import { useTable, useSortBy } from 'react-table';

const Content = () => {
    const data = useMemo(
        () => [
            {
                _id: 'ajksllyhtkuay3tl6',
                name: 'Muneeb Naveed',
                email: 'mfkofficial98@gmail.com',
                since: new Date(1993, 22, 11).toLocaleDateString('en-gb'),
            },
            {
                _id: 'rya8iousljgkg',
                name: 'Hassan Naveed',
                email: 'hassannaveed24@gmail.com',
                since: new Date(2003, 22, 8).toLocaleDateString('en-gb'),
            },
        ],
        []
    );

    const columns = useMemo(
        () => [
            {
                Header: 'ID',
                accessor: '_id', // accessor is the "key" in the data
            },
            {
                Header: 'Name',
                accessor: 'name',
            },
            {
                Header: 'Email',
                accessor: 'email',
            },
            {
                Header: 'Since',
                accessor: 'since',
            },
        ],
        []
    );

    const tableInstance = useTable({ columns, data }, useSortBy);

    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = tableInstance;

    const { contacts } = useSelector((state) => state.app.contacts);
    const dispatch = useDispatch();
    const fetchContacts = () => setTimeout(() => dispatch(actions.setContacts(data.contacts)), 2150);
    useEffect(() => {
        if (contacts.length < 1) fetchContacts();
    }, []);
    return (
        <Col xl={9} lg={8}>
            <Card>
                <CardBody>
                    <h4 className="header-title mt-0 mb-1">Review and Edit Contacts</h4>
                    <p className="sub-header">Fully featured section to add, review, update, and delete contacts.</p>

                    <Table {...getTableProps()}>
                        <thead>
                            {headerGroups.map((headerGroup) => (
                                <tr {...headerGroup.getHeaderGroupProps()}>
                                    {headerGroup.headers.map((column) => (
                                        <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                                            {column.render('Header')}
                                            <span>{column.isSorted ? (column.isSortedDesc ? ' 🔽' : ' 🔼') : ''}</span>
                                        </th>
                                    ))}
                                </tr>
                            ))}
                        </thead>
                        <tbody {...getTableBodyProps()}>
                            {rows.map((row) => {
                                prepareRow(row);
                                return (
                                    <tr {...row.getRowProps()}>
                                        {row.cells.map((cell) => (
                                            <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                        ))}
                                    </tr>
                                );
                            })}
                        </tbody>
                    </Table>
                </CardBody>
            </Card>
        </Col>
    );
};

export default Content;
