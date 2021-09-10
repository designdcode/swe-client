import React from 'react'
import BoardPage from '../pages/Admin/BoardPage'
import Dashboard from '../pages/Admin/Dashboard'
import UploadBoardPage from '../pages/Admin/UploadBoardPage'
import UploadImagePage from "../pages/Admin/UploadImagePage"
import UploadStoragePage from '../pages/Admin/UploadStoragePage'

interface IProps {
	param: string;
	subparam: string
}

const AdminRouteHandler: React.FC<IProps> = ({ param, subparam }) => {
	const routehandler = (param: string, subparam: string) => {
		switch (param) {
			case 'dashboard':
				return <Dashboard />
			case 'intro':
				if (subparam === 'storage')
					return <UploadStoragePage />
				else return <UploadImagePage />
			case 'value':
				if (subparam === 'storage')
					return <UploadStoragePage />
				else return <UploadImagePage />
			case 'edu':
				if (subparam === 'storage')
					return <UploadStoragePage />
				else return <UploadImagePage />
			case 'cooperation':
				if (subparam === 'storage')
					return <UploadStoragePage />
				else return <UploadImagePage />
			case 'community':
				if (subparam === 'storage')
					return <UploadStoragePage />
				else if (subparam === 'notice' || subparam === 'admission')
					return <BoardPage />
				else if (subparam === 'create')
					return <UploadBoardPage />
				else return <UploadImagePage />
			default: return;
		}
	}

	return <>{routehandler(param, subparam)}</>
}
export default AdminRouteHandler