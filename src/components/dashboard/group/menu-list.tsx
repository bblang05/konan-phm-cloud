'use client';

import * as React from 'react';
import Button from '@mui/material/Button';
import {
    Box,
    Typography,
    Icon, Grid
} from "@mui/material";

import {styled} from "@mui/material/styles";
import {TreeItem, treeItemClasses} from "@mui/x-tree-view/TreeItem";
import {SimpleTreeView} from "@mui/x-tree-view/SimpleTreeView";
import SmallEdit from "@/components/svgIcon/SmallEdit";
import Dash from "@/components/svgIcon/Dash";
import ArrowRightTriangle from "@/components/svgIcon/ArrowRightTriangle";
import ArrowBottomTriangle from "@/components/svgIcon/ArrowBottomTriangle";

const CustomTreeItem = styled(TreeItem)({
    [`& .${treeItemClasses.label}`]: {
        fontWeight: '400 !important',
        color: '#43464D',
    },
    [`& .${treeItemClasses.iconContainer}`]: {
        '& .close': {
            opacity: 0.3,
        },
    },
});

function Minus() {
    return (
        <Icon sx={{width: '12px', height: '12px', fill:'#43464D'}}>
            <Dash/>
        </Icon>
    );
}

function Collapse() {
    return (
        <Icon sx={{width: '12px', height: '12px', fill:'#43464D'}}>
            <ArrowRightTriangle/>
        </Icon>
    );
}

function Expand() {
    return (
        <Icon sx={{width: '12px', height: '12px', fill:'#43464D'}}>
            <ArrowBottomTriangle/>
        </Icon>
    );
}

export default function CustomIcons() {
    return (
        <Box sx={{height: 'calc(100vh - 340px)', minWidth: '100%'}}>
            <SimpleTreeView
                defaultExpandedItems={['grid']}
                slots={{
                    expandIcon: Expand,
                    collapseIcon: Collapse,
                    endIcon: Minus,
                }}
            >
                <CustomTreeItem itemId="grid" label="대시보드">
                    <CustomTreeItem itemId="grid-community" label="설비 모니터링"/>
                    <CustomTreeItem itemId="grid-pro" label="품목 모니터링"/>
                    <CustomTreeItem itemId="grid-premium" label="데이터 시각화"/>
                </CustomTreeItem>
                <CustomTreeItem itemId="pickers" label="설정">
                    <CustomTreeItem itemId="pickers-community" label="임계값 설정"/>
                    <CustomTreeItem itemId="pickers-pro" label="구간 설정"/>
                </CustomTreeItem>
                <CustomTreeItem itemId="charts" label="메뉴2">
                    <CustomTreeItem itemId="charts-community" label="@mui/x-charts"/>
                </CustomTreeItem>
            </SimpleTreeView>
        </Box>
    );
}

export function MenuList(): React.JSX.Element {

    return (
        <Box p={'11px 20px 18px 20px'}>
            <Box display="flex" justifyContent="space-between" alignItems="center" pb={'11px'}>
                <Typography variant="subtitle2">메뉴 목록</Typography>
                <Button variant="contained" color="inherit"
                        size="small"
                        disableElevation
                        sx={{fontSize: '12px', height: '26px', lineHeight: 'inherit'}}
                        startIcon={
                            <Icon sx={{width: 12, height: 12}}>
                                <SmallEdit/>
                            </Icon>
                        }>
                    권한 수정
                </Button>
            </Box>
            <CustomIcons/>
            <Grid
                container
                direction="row"
                justifyContent="flex-end"
                alignItems="center"
                gap={1}
                pt="20px"
            >
                <Button variant="contained" color="inherit" disableElevation sx={{width: '74px', height: '32px'}}>
                    취소
                </Button>
                <Button variant="contained" color="primary" disableElevation sx={{width: '74px', height: '32px'}}>
                    저장
                </Button>
            </Grid>
        </Box>
    );
}
