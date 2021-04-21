# schema

title: string, REQUIRED
description: string, REQUIRED
company: string , REQUIRED
salary: number
tags: [string], length >= 1
location: string REQUIRED
skills: {
    required: [string] REQUIRED,
    advantage: [string]
}


# API endpoint

GET /api/jobs - return all job postings
GET /api/jobs/:id - return job by id
POST /api/jobs - create new job posting
PUT /api/jobs/:id - update job posting by id
DELETE /api/jobs/:id - delete by id
