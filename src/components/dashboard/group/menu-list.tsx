'use client';

import * as React from 'react';
import Button from '@mui/material/Button';
import {
    Box,
    Typography,
    Link
} from "@mui/material";

import {styled} from "@mui/material/styles";
import {TreeItem, treeItemClasses} from "@mui/x-tree-view/TreeItem";
import SvgIcon, {SvgIconProps} from "@mui/material/SvgIcon";
import {SimpleTreeView} from "@mui/x-tree-view/SimpleTreeView";


const CustomTreeItem = styled(TreeItem)({
    [`& .${treeItemClasses.iconContainer}`]: {
        '& .close': {
            opacity: 0.3,
        },
    },
});

function Minus(props: SvgIconProps) {
    return (
        <SvgIcon
            fontSize="inherit"
            style={{width: 12, height: 12}}
            {...props}
        >
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12">
                <g id="ico_hierarchy-line" transform="translate(-32 -84)">
                    <rect id="icon" width="12" height="12" transform="translate(32 84)" fill="none" opacity="0.1"/>
                    <path id="Path_20" data-name="Path 20" d="M41,89.5H34v-1h7Z" transform="translate(0.5 1)"
                          fill="#43464D"/>
                </g>
            </svg>
        </SvgIcon>
    );
}

function Collapse(props: SvgIconProps) {
    return (
        <SvgIcon
            fontSize="inherit"
            style={{width: 12, height: 12}}
            {...props}
        >
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12">
                <g id="ico_hierarchy-arrow-right" transform="translate(-26 -84)">
                    <rect id="icon" width="12" height="12" transform="translate(26 84)" fill="none" opacity="0.1"/>
                    <path id="Path_19" data-name="Path 19" d="M22,87h8.8l-4.4,6.7Z"
                          transform="translate(-58 116.4) rotate(-90)" fill="#43464D"/>
                </g>
            </svg>
        </SvgIcon>
    );
}

function Expand(props: SvgIconProps) {
    return (
        <SvgIcon
            fontSize="inherit"
            style={{width: 12, height: 12, transform: 'rotate(90deg)'}}
            {...props}
        >
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12">
                <g id="ico_hierarchy-arrow-right" transform="translate(-26 -84)">
                    <rect id="icon" width="12" height="12" transform="translate(26 84)" fill="none" opacity="0.1"/>
                    <path id="Path_19" data-name="Path 19" d="M22,87h8.8l-4.4,6.7Z"
                          transform="translate(-58 116.4) rotate(-90)" fill="#43464d"/>
                </g>
            </svg>
        </SvgIcon>
    );
}

export default function CustomIcons() {
    return (
        <Box sx={{minHeight: 352, minWidth: 250}}>
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
        <Box p={'11px 20px'}>
            <Box display="flex" justifyContent="space-between" alignItems="center" pb={'11px'}>
                <Typography variant="subtitle2">메뉴 목록</Typography>
                <Button
                    variant="contained"
                    component={Link}
                    href=""
                    disableElevation
                    startIcon={
                        <Box
                            component="img"
                            alt=""
                            src="/images/ico_edit-nor.svg"
                            sx={{display: 'inline-block', height: '14px', width: '14px'}}
                        />
                    }
                    color="inherit"
                    size="small"
                >
                    권한 수정
                </Button>
            </Box>

            <CustomIcons/>
        </Box>
    );
}
