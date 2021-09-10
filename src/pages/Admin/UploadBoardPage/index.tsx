import React from 'react'
import useInput from "../../../hooks/useInput"
import { Container } from "./styles"
import { Form, Input, Button } from 'antd'
import { useCallback } from "react";
import { useMutation } from "@apollo/client";
import { CREATE_BOARD } from "../../../queries/adminQuery";
import { toast } from 'react-toastify'
import { useParams } from 'react-router';

interface paramParam {
	param: string;
	subparam: string;
	function: string
}

const layout = {
	wrapperCol: { span: 16 }
}

const UploadBoardPage: React.FC = () => {
	const { param, subparam } = useParams<paramParam>()
	const [title, onChangeTitle, setTitle] = useInput('')
	const [content, onChangeContent, setContent] = useInput('')
	const [link, onChangeLink, setLink] = useInput('')

	console.log(param, subparam)

	const [createBoard, { loading }] = useMutation(CREATE_BOARD, {
		onCompleted: ({ createBoard }) => {
			const { ok, err } = createBoard
			if (ok) {
				setTitle('')
				setContent('')
				setLink('')
				toast.success('게시물을 생성 하였습니다')
			} else {
				console.log(err)
				toast.error('게시물을 생성 할 수 없습니다')
			}
		}
	})

	const onFinish = useCallback(() => {
		createBoard({
			variables: {
				title: title.trim() ? title : null,
				content: content.trim() ? content : null,
				link: link.trim() ? link : null,
				category: 'test'
			}
		})
	}, [title, content, link, createBoard])


	return (
		<Container>
			<Form {...layout} name="upload-board" onFinish={onFinish}>
				<Form.Item name={['title']} label="제목">
					<Input onChange={onChangeTitle} value={title} />
				</Form.Item>
				<Form.Item name={['link']} label="링크">
					<Input onChange={onChangeLink} value={link} />
				</Form.Item>
				<Form.Item name={['content']} label="내용">
					<Input.TextArea onChange={onChangeContent} rows={10} value={content} />
				</Form.Item>
				<Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
					<Button type="primary" htmlType="submit">
						{!loading ? 'Submit' : 'Uploading...'}
					</Button>
				</Form.Item>
			</Form>
		</Container>
	)
}

export default UploadBoardPage