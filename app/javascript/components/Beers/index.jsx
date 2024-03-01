import React, {useEffect, useState} from "react";
import {Button, Popconfirm, Table} from "antd";
import _ from "underscore"

export default () => {

    const [beers, setBeers] = useState([])
    const [loading, setLoading] = useState(false)
    const url = "api/v1/beers"

    const deleteBeer = (id) => {}

    const columns = [
        {
            title: "Name",
            dataIndex: "name",
            key: "name",
            sorter: (a, b) => a.name.localeCompare(b.name)
        },
        {
            title: "Brand",
            dataIndex: "brand",
            key: "brand",
            sorter: (a, b) => a.brand.localeCompare(b.brand)
        },
        {
            title: "Country",
            dataIndex: "country",
            key: "country",
            sorter: (a, b) => a.country.localeCompare(b.country),
            filters: _.uniq(beers.map(({country}) => country)).map((country) => ({text: country, value: country})),
            onFilter: (value, record) => record.country == value
        },
        {
            title: "Style",
            dataIndex: "style",
            key: "style",
            sorter: (a, b) => a.style.localeCompare(b.style)
        },
        {
            title: "",
            key: "action",
            render: (_, record) => (
                <Popconfirm
                    title="Are you sure you want to delete that beer?"
                    onConfirm={() => deleteBeer(record.id)}
                    okText="Yes"
                    okType="danger"
                    cancelText="No"
                    >
                    <Button type="primary" danger>Delete</Button>
                </Popconfirm>
            )
        }
    ];



    useEffect(() => {
        setLoading(true);
        fetch(`${url}/index`)
            .then((data) => {
                if (data.ok) {
                    return data.json()
                }
                throw new Error("Network Error")
            })
            .then((json) => {
                setBeers(json.map((beer) => ({...beer, key: beer.id})))
            })
            .then(() => {
                setLoading(false)
            })
    }, [])

    return <>
        <Table className="table-striped-rows" dataSource={beers} columns={columns} loading={loading} />
    </>
}