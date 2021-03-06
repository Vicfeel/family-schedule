import React from 'react';
import {Switch, Route, RouteProps} from 'react-router-dom';
import {Layout} from 'antd';

import {Breadcrumb, Header} from '.';
import {
    SummaryView,
    PlanCheckInView, PunishmentCheckInView,
    PlanSettingView, PunishmentSettingView,
} from '../components';
import LostView from '../components/LostView';

const {Content, Footer} = Layout;

const routes: RouteProps[] = [
    {
        path: "/summary",
        exact: true,
        component: SummaryView,
    },
    {
        path: "/checkIn/plan",
        exact: true,
        component: PlanCheckInView,
    },
    {
        path: "/checkIn/punishment",
        exact: true,
        component: PunishmentCheckInView,
    },
    {
        path: "/setting/plan",
        exact: true,
        component: PlanSettingView,
    },
    {
        path: "/setting/punishment",
        exact: true,
        component: PunishmentSettingView,
    }
];

const Main = () => (
    <Layout>
        <Header />
        <Breadcrumb />
        <Content style={{margin: '0 16px', padding: 16, background: '#fff', overflowY: 'auto'}}>
            <Switch>
                {routes.map(route => (
                    <Route
                        key={`${route.path}`}
                        {...route}
                    />
                ))}
                <Route component={LostView} />
            </Switch>
        </Content>
        <Footer style={{textAlign: 'center'}}>家庭计划管理系统 ©2020 Created by 张伟佩</Footer>
    </Layout>
)

export default Main;
