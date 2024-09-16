'use client';

import * as React from 'react';
import {
    Box,
    Typography,
    Icon, Grid, Checkbox, FormControlLabel, Button
} from "@mui/material";
import {CheckboxProps} from "@mui/material/Checkbox";

import {styled} from "@mui/material/styles";
import {TreeItem, treeItemClasses} from "@mui/x-tree-view/TreeItem";
import {SimpleTreeView} from "@mui/x-tree-view/SimpleTreeView";
import SmallEdit from "@/components/svgIcon/SmallEdit";
import Dash from "@/components/svgIcon/Dash";
import ArrowRightTriangle from "@/components/svgIcon/ArrowRightTriangle";
import ArrowBottomTriangle from "@/components/svgIcon/ArrowBottomTriangle";

const BpIcon = styled('span')(() => ({
    borderRadius: 3,
    width: 16,
    height: 16,
    backgroundColor: 'var(--mui-palette-neutral-200)',
    'input:hover ~ &': {
        backgroundColor: 'var(--mui-palette-neutral-200)',
    },
    'input:disabled ~ &': {
        boxShadow: 'none',
        background: 'rgba(206,217,224,.5)',
    },
}));

const BpCheckedIcon = styled(BpIcon)({
    backgroundColor: 'var(--mui-palette-primary-main)',
    '&::before': {
        display: 'block',
        width: 16,
        height: 16,
        backgroundImage:
            "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath" +
            " fill-rule='evenodd' clip-rule='evenodd' d='M12 5c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 " +
            "1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5A1.003 1.003 0 0012 5z' fill='%23fff'/%3E%3C/svg%3E\")",
        content: '""',
    },
    'input:hover ~ &': {
        backgroundColor: 'var(--mui-palette-primary-main)',
    },
});

function BpCheckbox(props: CheckboxProps) {
    return (
        <Checkbox
            sx={{'&:hover': {backgroundColor: 'transparent'}}}
            disableRipple
            color="default"
            checkedIcon={<BpCheckedIcon/>}
            icon={<BpIcon/>}
            inputProps={{'aria-label': 'Checkbox demo'}}
            {...props}
        />
    );
}

function areAllChildrenSelected(childIds: string[], selectedItems: string[]) {
    return childIds.every(childId => selectedItems.includes(childId));
}

const CustomTreeItem = styled(TreeItem)<{ selected?: boolean }>(({selected}) => ({
    backgroundColor: selected ? '#F0F6FC' : 'inherit',
    [`& .${treeItemClasses.label}`]: {
        fontWeight: '400 !important',
        color: '#43464D',
        padding: '1.5px 0',
        fontSize: '13px',
    },
    [`& .${treeItemClasses.content}`]: {
        gap: '3px',
        borderRadius: '3px',
    },
    [`& .${treeItemClasses.selected}`]: {
        backgroundColor: '#F0F6FC !important',
        '&:focus': {
            backgroundColor: '#F0F6FC !important'
        },
    },
    [`& .${treeItemClasses.content}:focus`]: {
        backgroundColor: '#F0F6FC !important',
    },
    [`& .${treeItemClasses.content}:active`]: {
        backgroundColor: '#F0F6FC !important',
    },
    [`& .${treeItemClasses.content}:hover`]: {
        backgroundColor: 'transparent',
    },
}));

function Minus() {
    return (
        <Icon sx={{width: '12px', height: '12px', fill: '#43464D'}}>
            <Dash/>
        </Icon>
    );
}

function Collapse() {
    return (
        <Icon sx={{width: '12px', height: '12px', fill: '#43464D'}}>
            <ArrowRightTriangle/>
        </Icon>
    );
}

function Expand() {
    return (
        <Icon sx={{width: '12px', height: '12px', fill: '#43464D'}}>
            <ArrowBottomTriangle/>
        </Icon>
    );
}

export default function CustomIcons() {
    const [checkedItems, setCheckedItems] = React.useState<string[]>([]);

    const handleToggle = (itemId: string, childIds: string[]) => {
        const isChecked = checkedItems.includes(itemId);

        if (isChecked) {
            setCheckedItems((prevChecked) => prevChecked.filter(id => id !== itemId && !childIds.includes(id)));
        } else {
            setCheckedItems((prevChecked) => [...prevChecked, itemId, ...childIds]);
        }
    };


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
                <CustomTreeItem
                    itemId="grid"
                    label={
                        <TreeItemLabel
                            text="대시보드"
                            checked={checkedItems.includes('grid') || areAllChildrenSelected(['grid-community', 'grid-pro', 'grid-premium'], checkedItems)}
                            onChange={() => handleToggle('grid', ['grid-community', 'grid-pro', 'grid-premium'])}
                        />
                    }
                    selected={checkedItems.includes('grid') || areAllChildrenSelected(['grid-community', 'grid-pro', 'grid-premium'], checkedItems)}

                >
                    <CustomTreeItem
                        itemId="grid-community"
                        label={
                            <TreeItemLabel
                                text="설비 모니터링"
                                checked={checkedItems.includes('grid-community')}
                                onChange={() => handleToggle('grid-community', [])}
                            />
                        }
                        selected={checkedItems.includes('grid-community')}
                    />
                    <CustomTreeItem
                        itemId="grid-pro"
                        label={
                            <TreeItemLabel
                                text="품목 모니터링"
                                checked={checkedItems.includes('grid-pro')}
                                onChange={() => handleToggle('grid-pro', [])}
                            />
                        }
                        selected={checkedItems.includes('grid-pro')}
                    />
                    <CustomTreeItem
                        itemId="grid-premium"
                        label={
                            <TreeItemLabel
                                text="데이터 시각화"
                                checked={checkedItems.includes('grid-premium')}
                                onChange={() => handleToggle('grid-premium', [])}
                            />
                        }
                        selected={checkedItems.includes('grid-premium')}
                    />
                </CustomTreeItem>
                <CustomTreeItem
                    itemId="pickers"
                    label={
                        <TreeItemLabel
                            text="설정"
                            checked={checkedItems.includes('pickers') || areAllChildrenSelected(['pickers-community', 'pickers-pro'], checkedItems)}
                            onChange={() => handleToggle('pickers', ['pickers-community', 'pickers-pro'])}
                        />
                    }

                    selected={checkedItems.includes('pickers') || areAllChildrenSelected(['pickers-community', 'pickers-pro'], checkedItems)}
                >
                    <CustomTreeItem
                        itemId="pickers-community"
                        label={
                            <TreeItemLabel
                                text="임계값 설정"
                                checked={checkedItems.includes('pickers-community')}
                                onChange={() => handleToggle('pickers-community', [])}
                            />
                        }
                        selected={checkedItems.includes('pickers-community')}
                    />
                    <CustomTreeItem
                        itemId="pickers-pro"
                        label={
                            <TreeItemLabel
                                text="구간 설정"
                                checked={checkedItems.includes('pickers-pro')}
                                onChange={() => handleToggle('pickers-pro', [])}
                            />
                        }
                        selected={checkedItems.includes('pickers-pro')}
                    />
                </CustomTreeItem>
                <CustomTreeItem
                    itemId="charts"
                    label={
                        <TreeItemLabel
                            text="메뉴2"
                            checked={checkedItems.includes('charts') || areAllChildrenSelected(['charts-community'], checkedItems)}
                            onChange={() => handleToggle('charts', ['charts-community'])}
                        />
                    }
                    selected={checkedItems.includes('charts') || areAllChildrenSelected(['charts-community'], checkedItems)}
                >
                    <CustomTreeItem
                        itemId="charts-community"
                        label={
                            <TreeItemLabel
                                text="@mui/x-charts"
                                checked={checkedItems.includes('charts-community')}
                                onChange={() => handleToggle('charts-community', [])}
                            />
                        }
                        selected={checkedItems.includes('charts-community')}
                    />
                </CustomTreeItem>
            </SimpleTreeView>
        </Box>
    );
}

const TreeItemLabel = ({ text, checked, onChange }: { text: string; checked: boolean; onChange: () => void }) => {
    const handleCheckboxClick = (event: React.MouseEvent) => {
        event.stopPropagation();
        onChange();
    };

    return (
        <Box display="flex" alignItems="center" gap="6px">
            <FormControlLabel
                sx={{ gap: '10px' }}
                checked={checked}
                onClick={handleCheckboxClick}
                label={<Typography>{text}</Typography>}
                control={<BpCheckbox />}
            />
        </Box>
    );
};

export function MenuListEdit(): React.JSX.Element {

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
