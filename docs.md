1. create a schema for job posting
2. create API endpoints
3. create full stack monorepo
4. upload to github

# schema

title: string, required
description: string, required
salary: number, required
tags: [string], length >= 1
location: string
skills: [string]
experince: number

# API endpoint

GET /api/jobs - return all job postings
GET /api/jobs/:id - return job by id
POST /api/jobs - create new job posting
PUT /api/jobs/:id - update job posting by id
DELETE /api/jobs/:id - delete by id
