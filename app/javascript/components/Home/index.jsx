import {Button, Layout} from "antd";
import React from "react";
import Header from "../Header"
import Beers from "../Beers"

const { Content, Footer } = Layout

export default () => (
    <Layout className="layout">
        <Header />
        <Content style={{padding: "0 50px"}}>
            <div className="site-layout-content" style={{margin: "100px 0"}}>
                <h1>Beers catalogue</h1>
                <Beers />
            </div>
        </Content>
        <Footer style={{ textAlign: "center"}}>Marine Lancien ©2024</Footer>
    </Layout>
);