'use client';

import * as React from 'react';
import Card from '@mui/material/Card';
import {
    Box,
    Typography
} from "@mui/material";

export function RatePlanGraph(): React.JSX.Element {

    return (
        <Box>
            <Card variant="outlined">
                <Box p="17px 20px">
                    <Box display="flex" gap="20px">
                        <Box sx={{flexGrow: 1}}>
                            그래프
                        </Box>
                        <Box display="flex" flexDirection="column" sx={{width: '248px', flexShrink: 0}} gap="16px">
                            <Box>
                                <Typography variant="subtitle2">총 사용량</Typography>
                                <Box sx={{
                                    backgroundColor: '#F5F6F7',
                                    padding: '40px 38px',
                                    borderRadius: '4px',
                                    marginTop: '14px'
                                }}>
                                    <Typography variant="h3" color="text.secondary" textAlign="center" fontWeight="bold">20GB</Typography>
                                </Box>
                            </Box>
                            <Box>
                                <Typography variant="subtitle2">초과 사용량</Typography>
                                <Box sx={{
                                    backgroundColor: '#F5F6F7',
                                    padding: '40px 38px',
                                    borderRadius: '4px',
                                    marginTop: '14px'
                                }}>
                                    <Typography variant="h3" color="error.main" textAlign="center" fontWeight="bold">10GB</Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Card>
        </Box>
    );
}
