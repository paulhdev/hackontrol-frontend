import React from 'react'

import { AccountContainer } from './style'
import Aside from './aside'
import UserSection from './userSection'

export default function UserControl() {
	return (
		<AccountContainer>
			<Aside />
			<UserSection />
		</AccountContainer>
	)
}