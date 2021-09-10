import { useLazyQuery, useQuery } from '@apollo/client'
import { Table, Tag, Space } from 'antd'
import Column from 'antd/lib/table/Column'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { GET_BOARD_BY_CATEGORY } from '../../../queries/adminQuery'
import { getBoardByCategory } from '../../../typings/api'

interface ParamProps {
	param: string;
	subparam: string;
}

interface TableBoardProps {
	title: string | null
	content: string | null
}


const BoardPage = () => {
	const { param, subparam } = useParams<ParamProps>()
	const [boards, setBoards] = useState<Array<TableBoardProps>>()

	const [getBoard, { loading, data, refetch }] = useLazyQuery<getBoardByCategory>(GET_BOARD_BY_CATEGORY)

	const columns = [
		{
			title: '번호',
			key: 'number',
		},
		{
			title: '제목',
			dataIndex: 'title',
			key: 'title',
		},
		{
			title: '내용',
			dataIndex: 'content',
			key: 'content',
		},
		{
			title: 'Action',
			key: 'action',
			render: () => (
				<Space size="middle">
					<div>delete</div>
				</Space>
			)
		}
	];

	useEffect(() => {
		getBoard({ variables: { category: 'test' } })
	}, [getBoard])

	useEffect(() => {
		if (data && data.getBoardByCategory && data.getBoardByCategory.data) {
			const res = data.getBoardByCategory.data
			const dataSource: Array<TableBoardProps> = []
			res.map((elem) => {
				const obj: TableBoardProps = {
					title: elem.title,
					content: elem.content
				}
				return dataSource.push(obj)
			})
			setBoards(dataSource)
		}
	}, [data])

	if (loading) {
		return <>loading</>
	}

	return (
		<>
			<Table dataSource={boards}>
				<Column title="번호" dataIndex="number" key="number" />
				<Column title="제목" dataIndex="title" key="title" />
				<Column title="내용" dataIndex="content" key="content" />
				<Column title="Action" key="action" render={(text, record) => (
					<Space size="middle">
						<div>delete</div>
					</Space>
				)} />
			</Table>
		</>
	)
}

export default BoardPage