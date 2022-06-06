# |-------------------------------------------------------------------------
# | Docker Image
# |--------------------------------------------------------------------------
# |
# | Define the docker image that you want to use for this container.
# |

FROM odoo:15.0

# |--------------------------------------------------------------------------
# | Arguments
# |--------------------------------------------------------------------------
# |
# | Initiate the arguments that you want to reference or could
# | potentially reference in this Dockerfile. These are meant to be
# | argument variables that are defined in the docker-compose.yml.
# |

ARG BASE_DIR=/opt/odoo
ARG ODOO_EXE
ARG PIP_EXE

# |--------------------------------------------------------------------------
# | Root Commands / Base Setup
# |--------------------------------------------------------------------------
# |
# | Define the commands that we are running as the root user to configure the
# | Odoo container.
# |

USER root
ENTRYPOINT []

# Set the default config file
ENV ODOO_RC /opt/odoo/config/odoo.conf

# Create required directories/files
RUN set -x; \
        mkdir -p ${BASE_DIR} && \
        mkdir -p ${BASE_DIR}/config && \
        mkdir -p ${BASE_DIR}/core && \
        mkdir -p ${BASE_DIR}/core/addons && \
        mkdir -p ${BASE_DIR}/core/odoo && \
        # mkdir -p ${BASE_DIR}/core/setup && \
        mkdir -p ${BASE_DIR}/log && \
        # mkdir -p ${BASE_DIR}/testresults && \
        mkdir -p ${BASE_DIR}/vendor && \
        touch ${BASE_DIR}/log/odoo.log

# Set permissions on directories/files
RUN set -x; chown -R odoo:odoo ${BASE_DIR} /run
RUN set -x; \
        find ${BASE_DIR} -type d -exec chmod 755 {} \; && \
        find ${BASE_DIR} -type f -exec chmod 644 {} \; && \
        chmod 777 -R ${BASE_DIR}/log

# Install system packages
RUN set -x; apt-get update -y

# Install remaining system packages
RUN set -x; \
        apt-get install -y \
            gcc \
            procps \
            sudo

# Allow the odoo user to use sudo anywhere in its main directory without
# requiring password
RUN set -x; \
        usermod -d ${BASE_DIR} odoo && \
        echo "odoo ALL=(ALL) NOPASSWD: ALL" >> /etc/sudoers

# |--------------------------------------------------------------------------
# | Odoo Version Specific Commands
# |--------------------------------------------------------------------------
# |
# | A set of commands that need to be run specifically for each version
# | of Odoo.
# |
# | WARNING: Do not put Project Specific commands in this section. Only
# | put commands in this block if they should be run on every single
# | instance despite what project it is for.
# |

RUN set -x; echo "Running Odoo 15.0 specific commands..."

# Remove odoo package addons to force use of repository addons
RUN set -x; rm -rf /usr/lib/python3/dist-packages/odoo/addons

USER odoo

# Update PATH to include pip install location
ENV PATH="$PATH:${BASE_DIR}/.local/bin"

# Install Odoo's Python Dependencies
RUN set -x; ${PIP_EXE} install pip --upgrade
RUN set -x; \
        ${PIP_EXE} install \
            faker \
            holidays \
            ipdb \
            maya \
            pyOpenSSL \
            xlrd

# |--------------------------------------------------------------------------
# | Environment Variables
# |--------------------------------------------------------------------------
# |
# | Initiate the environment variables. These are identical to arguments
# | except argument can only be used during the build processes, while
# | environment variables are used inside the container after it is built.
# | For example, environment variables are required for the CMD command
# | since it is run inside the container once it is spun up.
# |

ENV ODOO_EXE ${ODOO_EXE}

# |--------------------------------------------------------------------------
# | Odoo Commands
# |--------------------------------------------------------------------------
# |
# | Define the commands that we are running as the odoo user to configure the
# | Odoo container.
# |

USER odoo
CMD /opt/odoo/core/${ODOO_EXE} \
        -c /opt/odoo/config/odoo.conf ${ODOO_FLAGS}
