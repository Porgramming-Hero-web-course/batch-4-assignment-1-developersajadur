{

    interface Profile {
        name: string;
        age: number;
        email: string;
    }


    const updateProfile = (profile: Profile, updates: Partial<Profile>) : Profile => {
        return {...profile, ...updates }
    }

    const profile = {
        name: "Alice",
        age: 25, 
        email: "alice@example.com" };


    const result = updateProfile(profile, { age: 26 })
    // console.log(result);





}