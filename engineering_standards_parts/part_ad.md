- Look for potential bugs, security issues, and performance problems.
- Ensure tests are adequate and pass.
- Verify documentation is updated if needed.
- Confirm that the change is necessary and well-designed.

### 4.2 Author Responsibilities
- Make changes easy to review (small, focused PRs).
- Respond to all comments promptly.
- Update code based on feedback.
- Ensure CI passes before requesting review.
- Remove debugging code and console.log statements.

### 4.3 Review Checklist
- [ ] Code follows style guides and passes linter.
- [ ] No commented-out code or debugging statements.
- [ ] Proper error handling and logging.
- [ ] Input validation and sanitization.
- [ ] Security considerations (authentication, authorization, data protection).
- [ ] Unit tests cover new code and edge cases.
- [ ] Documentation updated (code comments, API docs, user guides).
- [ ] Performance implications considered.
- [ ] Backward compatibility maintained (or documented if broken).
- [ ] Logging and monitoring added where appropriate.

## 5. Testing Standards

### 5.1 Test Types
- **Unit Tests**: Test individual functions, classes, components.
- **Integration Tests**: Test interactions between modules/services.
