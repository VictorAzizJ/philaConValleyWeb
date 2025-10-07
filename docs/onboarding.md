# Onboarding Guide

Welcome to PhilaConValley! This guide will help you get started contributing to our community projects.

## Our Values

- **Community First**: We prioritize collaboration and mutual support
- **Open by Default**: Share knowledge, code, and ideas openly
- **Inclusive Growth**: Everyone has something to learn and teach
- **Build Together**: Create projects that benefit the Philadelphia tech community

## Code of Conduct

We're committed to providing a welcoming and harassment-free experience for everyone. Please:

- Be respectful and considerate in all interactions
- Welcome newcomers and help them get started
- Give and receive constructive feedback gracefully
- Focus on what's best for the community

For full details, see our [Code of Conduct](https://github.com/philaconvalley/community/blob/main/CODE_OF_CONDUCT.md).

## Getting Started with Contributions

### Picking Issues

1. **Good First Issues**: Look for issues tagged `good-first-issue` to get started
2. **Help Wanted**: Check `help-wanted` for areas where we need support
3. **Ask Questions**: Comment on an issue if you need clarification before starting
4. **Claim It**: Leave a comment saying you're working on it to avoid duplication

### Branching Strategy

```bash
# Create a feature branch from main
git checkout main
git pull origin main
git checkout -b feature/your-feature-name
```

Branch naming conventions:

- `feature/` - New features
- `fix/` - Bug fixes
- `docs/` - Documentation updates
- `refactor/` - Code improvements

### Commit Style

We follow [Conventional Commits](https://www.conventionalcommits.org/):

```
type(scope): description

feat(auth): add social login
fix(api): resolve rate limiting issue
docs(readme): update setup instructions
```

Keep commits:

- **Focused**: One logical change per commit
- **Clear**: Descriptive messages explaining the "why"
- **Tested**: Ensure your changes work before committing

### Pull Request Etiquette

1. **Draft First**: Open as draft if still working
2. **Clear Description**: Explain what, why, and how
3. **Link Issues**: Reference related issues (e.g., "Closes #123")
4. **Self-Review**: Review your own changes before requesting review
5. **Stay Responsive**: Address feedback promptly and professionally
6. **Keep It Small**: Break large changes into smaller, reviewable PRs

Example PR description:

```markdown
## What

Adds user authentication with GitHub OAuth

## Why

Enables secure login and contributor attribution

## How

- Integrated NextAuth.js
- Added GitHub provider
- Created user session management

Closes #42
```

## Buddy System

New to the community? We'll pair you with an experienced contributor who can:

- Answer questions about the codebase
- Review your first few PRs
- Help navigate project decisions
- Connect you with others working on similar features

Request a buddy by commenting on your first issue or PR, or reach out in our Slack community.

## Getting Help

- **Slack**: Join our [community Slack](#) for real-time help
- **Discussions**: Use GitHub Discussions for longer conversations
- **Office Hours**: We host weekly community calls—check our calendar

---

Ready to contribute? Start by finding a [good first issue](https://github.com/philaconvalley/community/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22)!
