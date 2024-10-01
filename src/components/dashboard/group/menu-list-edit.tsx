'use client';
import * as React from 'react';
import { Box, Typography, Icon, Grid, Checkbox, FormControlLabel, Button, List, ListItem, ListItemText, ListItemIcon } from "@mui/material";
import { CheckboxProps } from "@mui/material/Checkbox";
import { styled } from "@mui/material/styles";
import ArrowRightTriangle from "@/components/svgIcon/ArrowRightTriangle";
import ArrowBottomTriangle from "@/components/svgIcon/ArrowBottomTriangle";
import SmallEdit from "@/components/svgIcon/SmallEdit";

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
        backgroundImage: "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath" +
            " fillRule='evenodd' clip-rule='evenodd' d='M12 5c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 " +
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
            sx={{ '&:hover': { backgroundColor: 'transparent' } }}
            disableRipple
            color="default"
            checkedIcon={<BpCheckedIcon />}
            icon={<BpIcon />}
            inputProps={{ 'aria-label': 'Checkbox demo' }}
            {...props}
        />
    );
}

function areAllChildrenSelected(childIds: string[], selectedItems: string[]) {
    return childIds.every(childId => selectedItems.includes(childId));
}

const ListItemLabel = ({ text, checked, onChange }: { text: string; checked: boolean; onChange: () => void }) => {
    const handleCheckboxClick = (event: React.MouseEvent) => {
        event.stopPropagation();
        onChange();
    };

    return (
        <ListItemText
            primary={
                <Typography sx={{ fontSize: '13px', color: '#43464D' }}>{text}</Typography>
            }
            sx={{ display: 'flex', alignItems: 'center', gap: '8px' }}
        >
            <FormControlLabel
                sx={{ gap: '8px' }}
                checked={checked}
                onClick={handleCheckboxClick}
                label={<Typography sx={{ fontSize: '13px' }}>{text}</Typography>}
                control={<BpCheckbox />}
            />
        </ListItemText>
    );
};

export default function CustomIcons() {
    const [checkedItems, setCheckedItems] = React.useState<string[]>([]);
    const [expandedItems, setExpandedItems] = React.useState<string[]>([]);

    const handleToggle = (itemId: string, childIds: string[]) => {
        const isChecked = checkedItems.includes(itemId);
        if (isChecked) {
            setCheckedItems((prevChecked) => prevChecked.filter(id => id !== itemId && !childIds.includes(id)));
        } else {
            setCheckedItems((prevChecked) => [...prevChecked, itemId, ...childIds]);
        }
    };

    const handleExpandToggle = (itemId: string) => {
        setExpandedItems((prevExpanded) =>
            prevExpanded.includes(itemId)
                ? prevExpanded.filter(id => id !== itemId)
                : [...prevExpanded, itemId]
        );
    };

    const isItemExpanded = (itemId: string) => expandedItems.includes(itemId);

    const isItemChecked = (itemId: string) => checkedItems.includes(itemId);

    const isParentChecked = (itemId: string, childIds: string[]) =>
        isItemChecked(itemId) || areAllChildrenSelected(childIds, checkedItems);

    return (
        <Box sx={{ height: 'calc(100vh - 340px)', minWidth: '100%' }}>
            <List>
                {/* Parent Item */}
                <ListItem
                    sx={{
                        backgroundColor: isParentChecked('grid', ['grid-community', 'grid-pro', 'grid-premium']) ? '#F0F6FC' : 'transparent',
                        height: '32px',
                        p: '8px 12px',
                    }}
                >
                    <ListItemIcon sx={{ minWidth: '16px', gap: '8px', marginRight: '8px' }}>
                        <Icon sx={{ width: '12px', height: '12px', fill: '#43464D' }} onClick={() => handleExpandToggle('grid')}>
                            {isItemExpanded('grid') ? <ArrowBottomTriangle /> : <ArrowRightTriangle />}
                        </Icon>
                        <BpCheckbox
                            checked={isParentChecked('grid', ['grid-community', 'grid-pro', 'grid-premium'])}
                            onChange={() => handleToggle('grid', ['grid-community', 'grid-pro', 'grid-premium'])}
                        />
                    </ListItemIcon>
                    <ListItemLabel
                        text="대시보드"
                        checked={isParentChecked('grid', ['grid-community', 'grid-pro', 'grid-premium'])}
                        onChange={() => handleToggle('grid', ['grid-community', 'grid-pro', 'grid-premium'])}
                    />
                </ListItem>

                {isItemExpanded('grid') && (
                    <Box>
                        <ListItem
                            sx={{ backgroundColor: isItemChecked('grid-community') ? '#F0F6FC' : 'transparent', height: '32px', p: '8px 16px 8px 40px' }}
                        >
                            <ListItemIcon sx={{ minWidth: '16px', gap: '8px', marginRight: '8px' }}>
                                <BpCheckbox
                                    checked={checkedItems.includes('grid-community')}
                                    onChange={() => handleToggle('grid-community', [])}
                                />
                            </ListItemIcon>
                            <ListItemLabel
                                text="설비 모니터링"
                                checked={checkedItems.includes('grid-community')}
                                onChange={() => handleToggle('grid-community', [])}
                            />
                        </ListItem>
                        <ListItem
                            sx={{ backgroundColor: isItemChecked('grid-pro') ? '#F0F6FC' : 'transparent', height: '32px', p: '8px 16px 8px 40px' }}
                        >
                            <ListItemIcon sx={{ minWidth: '16px', gap: '8px', marginRight: '8px' }}>
                                <BpCheckbox
                                    checked={checkedItems.includes('grid-pro')}
                                    onChange={() => handleToggle('grid-pro', [])}
                                />
                            </ListItemIcon>
                            <ListItemLabel
                                text="품목 모니터링"
                                checked={checkedItems.includes('grid-pro')}
                                onChange={() => handleToggle('grid-pro', [])}
                            />
                        </ListItem>
                        <ListItem
                            sx={{ backgroundColor: isItemChecked('grid-premium') ? '#F0F6FC' : 'transparent', height: '32px', p: '8px 16px 8px 40px' }}
                        >
                            <ListItemIcon sx={{ minWidth: '16px', gap: '8px', marginRight: '8px' }}>
                                <BpCheckbox
                                    checked={checkedItems.includes('grid-premium')}
                                    onChange={() => handleToggle('grid-premium', [])}
                                />
                            </ListItemIcon>
                            <ListItemLabel
                                text="데이터 시각화"
                                checked={checkedItems.includes('grid-premium')}
                                onChange={() => handleToggle('grid-premium', [])}
                            />
                        </ListItem>
                    </Box>
                )}

                {/* Another Parent Item */}
                <ListItem
                    sx={{
                        backgroundColor: isParentChecked('pickers', ['pickers-community', 'pickers-pro']) ? '#F0F6FC' : 'transparent',
                        height: '32px',
                        p: '8px 12px',
                    }}
                >
                    <ListItemIcon sx={{ minWidth: '16px', gap: '8px', marginRight: '8px' }}>
                        <Icon sx={{ width: '12px', height: '12px', fill: '#43464D' }} onClick={() => handleExpandToggle('pickers')}>
                            {isItemExpanded('pickers') ? <ArrowBottomTriangle /> : <ArrowRightTriangle />}
                        </Icon>
                        <BpCheckbox
                            checked={isParentChecked('pickers', ['pickers-community', 'pickers-pro'])}
                            onChange={() => handleToggle('pickers', ['pickers-community', 'pickers-pro'])}
                        />
                    </ListItemIcon>
                    <ListItemLabel
                        text="설정"
                        checked={isParentChecked('pickers', ['pickers-community', 'pickers-pro'])}
                        onChange={() => handleToggle('pickers', ['pickers-community', 'pickers-pro'])}
                    />
                </ListItem>

                {isItemExpanded('pickers') && (
                    <Box>
                        <ListItem
                            sx={{ backgroundColor: isItemChecked('pickers-community') ? '#F0F6FC' : 'transparent', height: '32px', p: '8px 16px 8px 40px' }}
                        >
                            <ListItemIcon sx={{ minWidth: '16px', gap: '8px', marginRight: '8px' }}>
                                <BpCheckbox
                                    checked={checkedItems.includes('pickers-community')}
                                    onChange={() => handleToggle('pickers-community', [])}
                                />
                            </ListItemIcon>
                            <ListItemLabel
                                text="임계값 설정"
                                checked={checkedItems.includes('pickers-community')}
                                onChange={() => handleToggle('pickers-community', [])}
                            />
                        </ListItem>
                        <ListItem
                            sx={{ backgroundColor: isItemChecked('pickers-pro') ? '#F0F6FC' : 'transparent', height: '32px', p: '8px 16px 8px 40px' }}
                        >
                            <ListItemIcon sx={{ minWidth: '16px', gap: '8px', marginRight: '8px' }}>
                                <BpCheckbox
                                    checked={checkedItems.includes('pickers-pro')}
                                    onChange={() => handleToggle('pickers-pro', [])}
                                />
                            </ListItemIcon>
                            <ListItemLabel
                                text="구간 설정"
                                checked={checkedItems.includes('pickers-pro')}
                                onChange={() => handleToggle('pickers-pro', [])}
                            />
                        </ListItem>
                    </Box>
                )}
            </List>
        </Box>
    );
}

export function MenuListEdit(): React.JSX.Element {
    return (
        <Box p={'11px 20px 18px 20px'}>
            <Box display="flex" justifyContent="space-between" alignItems="center" pb={'11px'}>
                <Typography variant="subtitle2">메뉴 목록</Typography>
                <Button
                    variant="contained"
                    color="inherit"
                    size="small"
                    disableElevation
                    disabled
                    sx={{ fontSize: '12px', height: '26px', lineHeight: 'inherit' }}
                    startIcon={
                        <Icon sx={{ width: 12, height: 12 }}>
                            <SmallEdit />
                        </Icon>
                    }
                >
                    권한 수정
                </Button>
            </Box>
            <CustomIcons />
            <Grid
                container
                direction="row"
                justifyContent="flex-end"
                alignItems="center"
                gap={1}
                pt="20px"
            >
                <Button variant="contained" color="inherit" disableElevation sx={{ width: '74px', height: '32px' }}>
                    취소
                </Button>
                <Button variant="contained" color="primary" disableElevation sx={{ width: '74px', height: '32px' }}>
                    저장
                </Button>
            </Grid>
        </Box>
    );
}
