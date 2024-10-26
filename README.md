# The readme, that nobody should read.

This is not useful information

## Badges

[![OpenSSF Scorecard](https://api.scorecard.dev/projects/github.com/Brunfilm/brunfilm.github.io/badge)](https://scorecard.dev/viewer/?uri=github.com/Brunfilm/brunfilm.github.io)
[![codecov](https://codecov.io/gh/Brunfilm/brunfilm.github.io/branch/main/graph/badge.svg?token=K29W2FME3L)](https://codecov.io/gh/Brunfilm/brunfilm.github.io)

![codecov Sunburst](https://codecov.io/gh/Brunfilm/brunfilm.github.io/graphs/sunburst.svg?token=K29W2FME3L)
![codecov Grid](https://codecov.io/gh/Brunfilm/brunfilm.github.io/graphs/tree.svg?token=K29W2FME3L)
![codecov Icicle](https://codecov.io/gh/Brunfilm/brunfilm.github.io/graphs/icicle.svg?token=K29W2FME3L)

[StepSecurity Actions Runs](https://app.stepsecurity.io/github/Brunfilm/actions/runs)

## Checks

Just writing something down so i dont forget something, i think.

### Dependency-review

Source: .github/workflows/dependency-review.yml

Source repository: https://github.com/actions/dependency-review-action

Does it really need to be in a separate wokflow? Its only one check in there.

```yaml
- name: "Dependency Review"
  uses: actions/dependency-review-action@a6993e2c61fd5dc440b409aa1d6904921c5e1894 # v4.3.5
```

### CodeQL

#### Analyze (javascript)

Source: .github/workflows/codeql.yml

All ok, never reports anything, no artifacts, just runs and done.

### CI-deploy

Source: .github/workflows/ci-deploy.yaml

Im trying to fix this.

### Codecov

I have leveld up!

New checks:

-   codecov/patch
-   codecov/project

Two new tokens to use.

#### Coverage Analytics

It works!

##### YAML

Nope

##### Project coverage

Nope

##### Flags

Nope

##### Components

Nope

#### Bundle Analysis

Says in the instruction that the same token as before should be in env var when building.
But that is insecure, so im trying to set it in the env secret. Lets see if it works.
Maybe its only when building local offline?

Must make one more commit and push, then i can try building the app.

##### Bundle reports

Nope

#### Test Analytics

It looks like test analysis cannot read the same output as Coverage analysis. All should be set up, lets run.

##### Failed tests

Nope

### security/snyk

Looks like snyk is back, remember that i removed you.

## The end

or now you have time to do something else better than this, and that cant be hard.
