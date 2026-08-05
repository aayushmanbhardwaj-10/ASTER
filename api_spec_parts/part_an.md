- **NewsArticle**: id, symbol, headline, summary, content, source, publishedAt, sentiment
- **Filing**: id, symbol, formType, filingDate, periodOfReport, url, size
- **Transcript**: id, symbol, quarter, year, speaker, sentiment, keyTopics
- **Peer**: symbol, relationType, similarityScore

### 11.7 Collaboration
- **FinancialModel**: id, name, description, ownerId, isPublic, tags, createdAt, updatedAt
- **ModelVersion**: id, modelId, versionNumber, changelog, createdBy, createdAt
- **ModelElement**: id, modelId, elementType, label, value, formula, dependencies
- **Comment**: id, modelId, elementId, authorId, content, createdAt
- **Notification**: id, userId, type, title, message, isRead, createdAt, relatedObjectId, relatedObjectType
