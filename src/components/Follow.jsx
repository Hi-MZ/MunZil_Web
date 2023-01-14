import customAxios from "../util/customAxios"

export const CreateFollower = (id) => {
    customAxios.post(`/follows/${id}`)    
}

export const DeleteFollower = (id) => {
    customAxios.delete(`/follows/${id}/following`)    
}

export const LookFollowing = async (id) => {
    const FollowingList = await customAxios.get(`/follows/following/${id}`)
}

export const LookFollower = async (id) => {
    const FollowerList = await customAxios.get(`/follows/follower/${id}`)
}
