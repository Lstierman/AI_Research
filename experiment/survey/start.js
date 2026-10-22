// Starts both frontends in one process. They share data/survey.db.
//   Participant survey:   http://localhost:3000  (PARTICIPANT_PORT)
//   Researcher dashboard: http://localhost:3001  (DASHBOARD_PORT, localhost only)
require("./participant/server").start();
require("./dashboard/server").start();
