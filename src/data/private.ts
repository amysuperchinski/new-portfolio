// Projects that have a password-protected full case study.
// The full page lives at /private/<project>-<code>/, where <code> is generated from the password,
// so the password and the real address are never stored in the site's code.
// To change a password, run:  npm run private-link <project> "<new password>"
export const privateProjects = ['fiserv', 'icpay'];
