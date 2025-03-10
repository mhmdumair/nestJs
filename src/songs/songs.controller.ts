import { Controller, Delete, Get, Post, Put } from '@nestjs/common';

@Controller('songs')
export class SongsController {
    @Get()
    findAll():string{
        return "Get All songs"
    }

    @Get(':id')
    getSong():string{
        return `This is song 1 song`
    }

    @Post()
    createSong():string{
        return "Create a song"
    }

    @Put(':id')
    updateSong():string{
        return "Update a song"
    }
    
    @Delete(':id')
    deleteSong():string{
        return "Delete a song"
    }

}
