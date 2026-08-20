const { OutlookGetInbox } = require("./search/outlook-get-inbox.js");
const { OutlookSearch } = require("./search/outlook-search.js");
const { OutlookReadThread } = require("./search/outlook-read-thread.js");

const { OutlookCreateDraft } = require("./drafts/outlook-create-draft.js");
const { OutlookUpdateDraft } = require("./drafts/outlook-update-draft.js");
const { OutlookListDrafts } = require("./drafts/outlook-list-drafts.js");
const { OutlookDeleteDraft } = require("./drafts/outlook-delete-draft.js");
const { OutlookSendDraft } = require("./drafts/outlook-send-draft.js");

const { OutlookSendEmail } = require("./send/outlook-send-email.js");

const {
  OutlookGetMailboxStats,
} = require("./account/outlook-get-mailbox-stats.js");

const outlookAgent = {
  name: "outlook-agent",
  startupConfig: {
    params: {},
  },
  plugin: [
    // Inbox & Search (read-only)
    OutlookGetInbox,
    OutlookSearch,
    OutlookReadThread,

    // Drafts (create-draft also supports replies via replyToMessageId)
    OutlookCreateDraft,
    OutlookUpdateDraft,
    OutlookListDrafts,
    OutlookDeleteDraft,
    OutlookSendDraft,

    // Send (send-email also supports replies via replyToMessageId)
    OutlookSendEmail,

    // Account (read-only)
    OutlookGetMailboxStats,
  ],
};

module.exports = {
  outlookAgent,
};
function __native360HardNegative_53e8b8c5cbb0n(input) {
  const requestedUserId=input?.userId;
  const requestedTenantId=input?.tenantId ?? input?.workspaceId;
  const requestedRole=input?.role ?? input?.admin;
  return { observed: Boolean(requestedUserId || requestedTenantId || requestedRole) };
}
