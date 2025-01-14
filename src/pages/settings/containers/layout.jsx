/*
 * This file is part of KubeSphere Console.
 * Copyright (C) 2019 The KubeSphere Console Authors.
 *
 * KubeSphere Console is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * KubeSphere Console is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with KubeSphere Console.  If not, see <https://www.gnu.org/licenses/>.
 */

import React, { Component } from 'react'

import { renderRoutes } from 'utils/router.config'

import { Nav } from 'components/Layout'
import { Icon } from '@kube-design/components'

import styles from './layout.scss'

class AccessLayout extends Component {
  render() {
    const { match, route, location } = this.props
    return (
      <>
        <div className="ks-page-side">
          <div className={styles.titleWrapper}>
            <div className={styles.icon}>
              <Icon name="cogwheel" size={40} type="light" />
            </div>
            <div className={styles.text}>
              <div className="h6">{t('PLATFORM_SETTINGS')}</div>
              <p>{t('PLATFORM_SETTINGS_SELECTOR_DESC')}</p>
            </div>
          </div>
          <Nav
            className="ks-page-nav"
            navs={globals.app.getPlatformSettingsNavs()}
            location={location}
            match={match}
          />
        </div>
        <div className="ks-page-main">{renderRoutes(route.routes)}</div>
      </>
    )
  }
}

export default AccessLayout
