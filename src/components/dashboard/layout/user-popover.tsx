import * as React from 'react';
import {useRouter} from 'next/navigation';
import {Divider, MenuItem, MenuList, Popover} from '@mui/material';

import {authClient} from '@/lib/auth/client';
import {logger} from '@/lib/default-logger';
import {useUser} from '@/hooks/use-user';

export interface UserPopoverProps {
    anchorEl: Element | null;
    onClose: () => void;
    open: boolean;
}

export function UserPopover({anchorEl, onClose, open}: UserPopoverProps): React.JSX.Element {
    const {checkSession} = useUser();

    const router = useRouter();

    const handleSignOut = React.useCallback(async (): Promise<void> => {
        try {
            const {error} = await authClient.signOut();

            if (error) {
                logger.error('Sign out error', error);
                return;
            }
            await checkSession?.();
            router.refresh();
        } catch (err) {
            logger.error('Sign out error', err);
        }
    }, [checkSession, router]);

    return (
        <Popover
            anchorEl={anchorEl}
            anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
            onClose={onClose}
            open={open}
            slotProps={{paper: {sx: {width: '120px', borderRadius: '5px'}}}}
        >
            <MenuList disablePadding sx={{p: '4px 0'}}>
                <MenuItem>
                    비밀번호 변경
                </MenuItem>
                <MenuItem onClick={handleSignOut}>로그아웃</MenuItem>
                <Divider/>
                <MenuItem disabled sx={{color: '#777D87', opacity: '1 !important'}}>
                    버전:1.0.0
                </MenuItem>
            </MenuList>
        </Popover>
    );
}
