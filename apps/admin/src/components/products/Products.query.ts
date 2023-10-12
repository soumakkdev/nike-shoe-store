import { httpRequestWithAuth } from '@/lib/fetch'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'

export const useProducts = () => {
	return useQuery(['products'], () => httpRequestWithAuth('GET', '/api/admin/products'), {})
}

export const useAddProduct = () => {
	const queryClient = useQueryClient()
	return useMutation(({ body }: { body: any }) => httpRequestWithAuth('POST', '/api/admin/products', body), {
		onSuccess: () => {
			queryClient.invalidateQueries(['products'])
		},
	})
}
