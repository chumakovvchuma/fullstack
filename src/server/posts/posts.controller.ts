import { Controller} from '@nestjs/common' 
import { Crud } from '@nestjsx/crud' 
import { PostsService } from './posts.service' 
import { Post } from './post.entity' 

@Crud({
	model: {
		type: Post
	},
	params: {
		id: {
			field: 'id',
			type: 'uuid',
			primary: true
		}
	}
})
@Controller('post') 
export class PostsController {
	constructor (public service: PostsService) {}
}
