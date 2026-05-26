import { LightningElement } from 'lwc';
import {
    openTab,
    getFocusedTabInfo,
    setTabLabel,
    setTabIcon,
    isConsoleNavigation
} from 'lightning/platformWorkspaceApi';

export default class ConsoleWorkspaceLauncher extends LightningElement {
    message;
    error;

    async openAccountList() {
        await this.openConsoleTab(
            {
                type: 'standard__objectPage',
                attributes: {
                    objectApiName: 'Account',
                    actionName: 'list'
                },
                state: {
                    filterName: 'Recent'
                }
            },
            'Accounts',
            'standard:account'
        );
    }

    async openCaseList() {
        await this.openConsoleTab(
            {
                type: 'standard__objectPage',
                attributes: {
                    objectApiName: 'Case',
                    actionName: 'list'
                },
                state: {
                    filterName: 'Recent'
                }
            },
            'Cases',
            'standard:case'
        );
    }

    async renameCurrentTab() {
        this.clearMessages();

        try {
            const consoleNavigation = await isConsoleNavigation();

            if (!consoleNavigation) {
                this.error = 'This component must be used inside a Lightning Console app.';
                return;
            }

            const tabInfo = await getFocusedTabInfo();

            await setTabLabel(tabInfo.tabId, 'Workspace Launcher');
            await setTabIcon(tabInfo.tabId, 'utility:apps');

            this.message = 'Current console tab was renamed successfully.';
        } catch (error) {
            this.error = this.getErrorMessage(error);
        }
    }

    async openConsoleTab(pageReference, label, icon) {
        this.clearMessages();

        try {
            const consoleNavigation = await isConsoleNavigation();

            if (!consoleNavigation) {
                this.error = 'This component must be used inside a Lightning Console app.';
                return;
            }

            const tabId = await openTab({
                pageReference: pageReference,
                focus: true
            });

            await setTabLabel(tabId, label);
            await setTabIcon(tabId, icon);

            this.message = label + ' tab opened successfully.';
        } catch (error) {
            this.error = this.getErrorMessage(error);
        }
    }

    clearMessages() {
        this.message = undefined;
        this.error = undefined;
    }

    getErrorMessage(error) {
        if (error && error.body && error.body.message) {
            return error.body.message;
        }

        if (error && error.message) {
            return error.message;
        }

        return 'Unexpected console workspace error.';
    }
}
