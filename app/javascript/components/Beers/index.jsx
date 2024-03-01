import React, {useEffect, useState} from "react";
import {Button, Popconfirm, Table} from "antd";

export default () => {

    const [beers, setBeers] = useState([])
    const [loading, setLoading] = useState(false)
    const url = "api/v1/beers"

    const deleteBeer = (id) => {}

    const columns = [
        {
            title: "Name",
            dataIndex: "name",
            key: "name"
        },
        {
            title: "Brand",
            dataIndex: "brand",
            key: "brand"
        },
        {
            title: "Country",
            dataIndex: "country",
            key: "country"
        },
        {
            title: "Style",
            dataIndex: "style",
            key: "style"
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