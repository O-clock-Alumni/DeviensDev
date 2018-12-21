# Continuous Integration/Deployment

Runs with CircleCI + Dokku (preprod). See [.circleci/config.yml](../.circleci/config.yml).

## Setup overview

### 1. Generate a dedicated SSH key to bind Dokku to CircleCI.

``` sh
# On Dokku.
ssh-keygen -t rsa # saved to id_rsa.circleci
```

### 2. Copy private key to CircleCI

_SSH Permission_ in project's settings. _Hostname_ must be filled with that of the deployment server's (eg. nico.oclock.io).

### 3. Configure CircleCI

Within .circleci/config.yml:

- Add a step "add_ssh_keys" with the fingerprint. Get the MD5-encrypted fingerprint with `ssh-keygen -E md5 -lf .ssh/id_rsa.circleci.pub` on Dokku, add it to config.yml
- Make sure to add Dokku's hostname to the executor's known hosts. Use the hashed version, adding `ssh-keyscan -H nico.oclock.io >> ~/.ssh/known_hosts` as a step in config.yml.

### 4. Add the public key to Dokku

``` sh
# On Dokku.
sudo dokku ssh-keys:add circleci .ssh/id_rsa.circleci.pub
```

---

From now on, one may `git push` and get the app deployed once the CI has passed :tada:
