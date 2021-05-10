import styled from 'styled-components'

import { memo } from 'react'
import { Card } from 'components/atoms/card/Card'
import { UserIconWithName } from 'components/molecules/user/UserIconWithName'

import type { FC } from 'react'

type Props = {
  user: {
    id: number;
    image: string;
    name: string;
    email: string;
    phone: string;
    company: {
      name: string
    }
    website: string;
  }
}

export const UserCard: FC<Props> = memo(({ user }) => {
  const { image, name, email, phone, company, website } = user

  return (
    <Card>
      <UserIconWithName image={image} name={name} />
      <SDl>
        <dt>メール</dt>
        <dd>{email}</dd>
        <dt>TEL</dt>
        <dd>{phone}</dd>
        <dt>会社名</dt>
        <dd>{company.name}</dd>
        <dt>WEB</dt>
        <dd>{website}</dd>
      </SDl>
    </Card>
  )
})

const SDl = styled.dl`
  text-align: left;
  margin-bottom: 0px;
  dt {
    float: left;
  }
  dd {
    overflow-wrap: break-word;
    padding: 0 0 8px 32px;
  }
`
