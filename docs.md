# schema

title: string, required
description: string, required
salary: number
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
