import styled from '@emotion/styled/macro'
import React, { VFC } from 'react'

const Wrapper = styled.div`
height:100%;
width:100%;
`

const Img = styled.img`
height:100%;
width:100%;
`

const Renewal:VFC = () =>{
	return (
	<Wrapper>
		<Img src={'img/renewal.png'} alt="renewal" />
	</Wrapper>
	)
}

export default Renewal