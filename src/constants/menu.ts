import CalIcon from '@/icons/cal-icon'
import ChatIcon from '@/icons/chat-icon'
import DashboardIcon from '@/icons/dashboard-icon'
import EmailIcon from '@/icons/email-icon'
import HelpDeskIcon from '@/icons/help-desk-icon'
import IntegrationsIcon from '@/icons/integrations-icon'
import SettingsIcon from '@/icons/settings-icon'
import StarIcon from '@/icons/star-icon'
import TimerIcon from '@/icons/timer-icon'
import React from 'react'

type SIDE_BAR_MENU_PROPS = {
  label: string
  icon: any
  path: string
}

export const SIDE_BAR_MENU: SIDE_BAR_MENU_PROPS[] = [
  {
    label: 'Dashboard',
    icon: React.createElement(DashboardIcon),
    path: 'dashboard',
  },
  {
    label: 'Conversations',
    icon:  React.createElement(ChatIcon),
    path: 'conversation',
  },
  {
    label: 'Integrations',
    icon:  React.createElement(IntegrationsIcon),
    path: 'integration',
  },
  {
    label: 'Settings',
    icon:  React.createElement(SettingsIcon),
    path: 'settings',
  },
  {
    label: 'Appointments',
    icon:  React.createElement(CalIcon),
    path: 'appointment',
  },
  {
    label: 'Email Marketing',
    icon:  React.createElement(EmailIcon),
    path: 'email-marketing',
  },
]

type TABS_MENU_PROPS = {
  label: string
  icon?: any
}

export const TABS_MENU: TABS_MENU_PROPS[] = [
  {
    label: 'unread',
    icon:  React.createElement(EmailIcon),
  },
  {
    label: 'all',
    icon:  React.createElement(EmailIcon),
  },
  {
    label: 'expired',
    icon:  React.createElement(TimerIcon),
  },
  {
    label: 'starred',
    icon:  React.createElement(StarIcon),
  },
]

export const HELP_DESK_TABS_MENU: TABS_MENU_PROPS[] = [
  {
    label: 'help desk',
  },
  {
    label: 'questions',
  },
]

export const APPOINTMENT_TABLE_HEADER = [
  'Name',
  'RequestedTime',
  'Added Time',
  'Domain',
]

export const EMAIL_MARKETING_HEADER = ['Id', 'Email', 'Answers', 'Domain']

export const BOT_TABS_MENU: TABS_MENU_PROPS[] = [
  {
    label: 'chat',
    icon:  React.createElement(ChatIcon),
  },
  {
    label: 'helpdesk',
    icon:  React.createElement(HelpDeskIcon),
  },
]
